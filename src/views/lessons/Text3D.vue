<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">

import * as THREE from 'three'
import { useRenderer } from '@/use/useRenderer'
import { useLoader } from '@/three/loadingManager'
import { useText } from '@/three/objects/text'

const { scene, camera, render } = useRenderer()

const { loadFont } = useLoader()

camera.position.z = 5

loadFont('/fonts/helvetiker_regular.typeface.json', (font) => {
  const { mesh: textMesh } = useText('League Engine', {
    font,
    size: 0.5,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5
  })

  scene.add(textMesh)
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
