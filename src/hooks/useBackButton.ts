import { useEffect, useRef } from 'react';

type Handler = () => void;
type StackItem = { id: string; handler: Handler };

const handlerStack: StackItem[] = [];
let globalListenerInitialized = false;

function initGlobalListener() {
  if (globalListenerInitialized) return;
  globalListenerInitialized = true;

  window.addEventListener('popstate', () => {
    if (handlerStack.length > 0) {
      const topItem = handlerStack[handlerStack.length - 1];
      // If the current history state ID does not match the top item's ID,
      // it means the top item's history state was popped by the browser back button.
      if (window.history.state?.id !== topItem.id) {
        topItem.handler();
      }
    }
  });
}

export function useBackButton(isActive: boolean, onBack: () => void) {
  const onBackRef = useRef(onBack);

  useEffect(() => {
    onBackRef.current = onBack;
  }, [onBack]);

  useEffect(() => {
    if (!isActive) return;

    initGlobalListener();

    const id = Math.random().toString(36).substring(2, 9);
    window.history.pushState({ type: 'motoscope_back', id }, '');

    const stackItem: StackItem = {
      id,
      handler: () => onBackRef.current(),
    };

    handlerStack.push(stackItem);

    return () => {
      const index = handlerStack.indexOf(stackItem);
      if (index !== -1) {
        handlerStack.splice(index, 1);
      }

      // If this component is unmounting but its state is still at the top of the browser history,
      // it means it was closed via UI interaction rather than the back button.
      // We must clean up the history by popping it programmatically.
      if (window.history.state && window.history.state.id === id) {
        window.history.back();
      }
    };
  }, [isActive]);
}
