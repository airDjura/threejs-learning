import { ref, onMounted, onUnmounted } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function useWindowResize (callbackHandler: () => void = () => {}) {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  function handler () {
    width.value = window.innerWidth
    height.value = window.innerHeight

    callbackHandler()
  }

  onMounted(() => window.addEventListener('resize', handler))
  onUnmounted(() => window.removeEventListener('resize', handler))

  return { width, height }
}
