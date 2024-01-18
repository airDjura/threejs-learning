import { ref, onMounted, onUnmounted } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function useDoubleClick (callbackHandler: () => void = () => {}) {
  function handler () {
    callbackHandler()
  }

  onMounted(() => window.addEventListener('dblclick', handler))
  onUnmounted(() => window.removeEventListener('dblclick', handler))
}
