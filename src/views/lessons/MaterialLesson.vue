<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useRenderer } from '@/use/useRenderer'

const { scene, camera, render } = useRenderer({
  renderCallback: (clock) => {
    const elapsedTime = clock.getElapsedTime()
    sphere.rotation.y = elapsedTime
    torus.rotation.y = elapsedTime
    plane.rotation.y = elapsedTime

    sphere.rotation.x = -1 * elapsedTime
    torus.rotation.x = -1 * elapsedTime
    plane.rotation.x = -1 * elapsedTime
  }
})

camera.position.z = 5

const material = new THREE.MeshBasicMaterial({ color: 0xffffff })

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  material
)

sphere.position.x = -2

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  material
)

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 16, 32),
  material
)

torus.position.x = 2

scene.add(sphere, plane, torus)

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
