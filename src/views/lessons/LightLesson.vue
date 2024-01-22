<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useRenderer } from '@/use/useRenderer'
import { useCube } from '@/three/objects/cube'
import { useSphere } from '@/three/objects/sphere'
import { useTorus } from '@/three/objects/torus'

const { scene, camera } = useRenderer()

camera.position.z = 5

const { mesh: meshSphere } = useSphere()
meshSphere.position.x = 2

const { mesh: meshCube } = useCube()

const { mesh: meshTorus } = useTorus()

meshTorus.position.x = 4

scene.add(meshTorus)

scene.add(meshSphere)

scene.add(meshCube)

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
