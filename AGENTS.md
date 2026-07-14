# Project Instructions & Conventions

## Offline Audio Strategy & Requirements

- **Local Storage / Offline Support**: All audio files (including explanations, multimeter signals, and oscilloscope signals) must be stored locally on the user's device and function completely offline without requiring internet access or external server API requests.
- **Pre-download / Caching**: The application must download and store the audio files on the user's device (for example, using Cache Storage API, Service Workers, or IndexedDB) so they can be retrieved instantly.
- **Playback Source**: When reproducing audio, the app must pull directly from the local cache on the user's device rather than making HTTP requests to external services like Gemini TTS or cloud backends.
