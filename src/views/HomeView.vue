<template>
  <div class="home">
    <h1>{{width}} : {{height}}</h1>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useWindowResize } from '@/use/useWindowResize'

import { computed, onMounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { cubeMash } from '@/three/objects/cube'
import gsap from 'gsap'
import { useMouse } from '@vueuse/core'
import { useDoubleClick } from '@/use/useDoubleClick'
import { triangleMash } from '@/three/objects/triangle'
let controls: OrbitControls

let renderer: THREE.WebGLRenderer
let canvas: HTMLCanvasElement

function updateRenderer () {
  renderer.setSize(width.value, height.value)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

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
  console.log('double click')
})

const { x, y } = useMouse()

const scene = new THREE.Scene()

const cursorX = computed(() => x.value / width.value - 0.5)
const cursorY = computed(() => -(y.value / height.value - 0.5))

// Object

const { cube, image, texture } = cubeMash()

cube.position.set(0, 0, 0)

scene.add(cube)

const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 1, 1000)
camera.position.z = 5

const pointLight = new THREE.PointLight(0xffffff, 500)
pointLight.position.set(10, 10, 10)

scene.add(pointLight)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

scene.add(ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight, 5)
scene.add(lightHelper)

// const clock = new THREE.Clock()
function render () {
  // const elapsedTime = clock.getElapsedTime()

  controls.update()

  renderer.render(scene, camera)
  window.requestAnimationFrame(render)
}

onMounted(async () => {
  image.onload = () => {
    texture.needsUpdate = true
  }

  image.src = '/textures/000.jpg'

  canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement

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
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.webgl {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
