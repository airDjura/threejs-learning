<template>
  <div class="home">
    <h1>{{width}} : {{height}}</h1>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useWindowResize } from '@/use/useWindowResize'

import { onMounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const { width, height } = useWindowResize(() => {
  renderer.setSize(width.value, height.value)
  camera.aspect = width.value / height.value
  camera.updateProjectionMatrix()
})

let renderer: THREE.WebGLRenderer

const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mash = new THREE.Mesh(geometry, material)

const group = new THREE.Group()
group.rotation.set(3, 0, 0)

mash.position.set(0.7, -0.6, 1)

// scene.add(mash)

const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 1, 99999)
camera.position.z = 1200

const loader = new SVGLoader()

let time = Date.now()

function render () {
  const currentTime = Date.now()

  const deltaTime = currentTime - time

  time = currentTime

  mash.rotation.x += 0.001 * deltaTime
  mash.rotation.y += 0.001 * deltaTime
  group.rotation.y += 0.001 * deltaTime
  renderer.render(scene, camera)
  window.requestAnimationFrame(render)
}

onMounted(() => {
  const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement

  renderer = new THREE.WebGLRenderer({
    canvas
  })

  renderer.setSize(width.value, height.value)

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  // controls.enabled = false

  // load a SVG resource
  loader.load(
    // resource URL
    'le.svg',
    // called when the resource is loaded
    function (data) {
      const paths = data.paths

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i]

        const material = new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false
        })

        const shapes = SVGLoader.createShapes(path)

        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j]
          console.log(shape)
          const geometry = new THREE.ExtrudeGeometry(shape, { depth: 50, bevelEnabled: false })
          console.log(geometry)
          const shapeMash = new THREE.Mesh(geometry, material)
          group.add(shapeMash)
        }
      }

      scene.add(group)

      scene.add(mash)

      render()
    }
  )
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
