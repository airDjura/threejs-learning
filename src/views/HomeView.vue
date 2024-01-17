<template>
  <div class="home">
    <h1>{{width}} : {{height}}</h1>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useWindowResize } from '@/use/useWindowResize'

import { onMounted, ref } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const { width, height } = useWindowResize(() => {
  renderer.value.setSize(width.value, height.value)
  camera.aspect = width.value / height.value
  camera.updateProjectionMatrix()
})

const renderer = ref(new THREE.WebGLRenderer())

const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mash = new THREE.Mesh(geometry, material)

mash.position.set(0.7, -0.6, 1)

scene.add(mash)

const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 0.1, 100)
camera.position.z = 5

let time = Date.now()

function render () {
  const currentTime = Date.now()

  const deltaTime = currentTime - time

  time = currentTime

  mash.rotation.x += 0.001 * deltaTime
  mash.rotation.y += 0.001 * deltaTime
  renderer.value.render(scene, camera)
  window.requestAnimationFrame(render)
}

onMounted(() => {
  const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement

  renderer.value = new THREE.WebGLRenderer({
    canvas
  })

  renderer.value.setSize(width.value, height.value)

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  // controls.enabled = false

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
