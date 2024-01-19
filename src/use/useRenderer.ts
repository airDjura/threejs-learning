import { useWindowResize } from '@/use/useWindowResize'
import * as THREE from 'three'
import { onMounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useDoubleClick } from '@/use/useDoubleClick'

export function useRenderer (elementSelector: string) {
  const { width, height } = useWindowResize(() => {
    updateRenderer()
    camera.aspect = width.value / height.value
    camera.updateProjectionMatrix()
  })

  useDoubleClick(() => {
    if (!document.fullscreenElement) {
      canvas.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  })

  const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 0.1, 1000)
  let renderer: THREE.WebGLRenderer
  let canvas: HTMLCanvasElement
  let controls: OrbitControls
  const scene = new THREE.Scene()

  function updateRenderer () {
    renderer.setSize(width.value, height.value)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  function render () {
    // const elapsedTime = clock.getElapsedTime()

    controls.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(render)
  }

  onMounted(async () => {
    canvas = document.querySelector(elementSelector) as HTMLCanvasElement

    renderer = new THREE.WebGLRenderer({
      canvas
    })

    updateRenderer()

    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    // controls.enabled = false

    // load a SVG resource

    render()
  })

  return {
    scene,
    camera
  }
}