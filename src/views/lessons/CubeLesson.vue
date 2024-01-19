<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useRenderer } from '@/use/useRenderer'
import { cubeMash } from '@/three/objects/cube'

const { scene, camera } = useRenderer('.webgl')

camera.position.z = 5

const { cube } = cubeMash()

scene.add(cube)

const pointLight = new THREE.PointLight(0xffffff, 500)
pointLight.position.set(10, 10, 10)

scene.add(pointLight)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

scene.add(ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight, 5)
scene.add(lightHelper)
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
