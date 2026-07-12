import { useEffect, useRef } from 'react';

// Keep track of alive state IDs
const aliveStates = new Set<string>();

// Initialize global index from the current history state if it exists
let globalStateIndex = window.history.state?.index || 0;

let globalListenerInitialized = false;

function initGlobalListener() {
  if (globalListenerInitialized) return;
  globalListenerInitialized = true;

  window.addEventListener('popstate', (e) => {
    // If we navigated to a state created by our hook
    if (e.state && e.state.type === 'motoscope_back') {
      const stateId = e.state.id;
      if (!aliveStates.has(stateId)) {
        // This is a dead state (the component that created it has unmounted).
        // Skip it by going back again.
        window.history.back();
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

    globalStateIndex++;
    const myIndex = globalStateIndex;
    const stateId = Math.random().toString(36).substring(2, 9);
    
    aliveStates.add(stateId);
    
    const currentState = window.history.state;
    const isCurrentDead = currentState?.type === 'motoscope_back' && !aliveStates.has(currentState.id);

    if (isCurrentDead) {
      window.history.replaceState({ type: 'motoscope_back', id: stateId, index: myIndex }, '');
    } else {
      window.history.pushState({ type: 'motoscope_back', id: stateId, index: myIndex }, '');
    }

    let hasTriggeredBack = false;

    const handlePopState = (e: PopStateEvent) => {
      const currentEventIndex = e.state?.index || 0;
      
      if (currentEventIndex < myIndex && !hasTriggeredBack) {
        hasTriggeredBack = true;
        onBackRef.current();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      aliveStates.delete(stateId);
    };
  }, [isActive]);
}
