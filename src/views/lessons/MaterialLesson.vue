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
