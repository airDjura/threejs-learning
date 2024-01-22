<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useRenderer } from '@/use/useRenderer'
import { useCube } from '@/three/objects/cube'
import { TextureType, useTextures } from '@/three/loaders/textures'

const { scene, camera } = useRenderer()
const { getTexture } = useTextures()

const doorColorTexture = getTexture(TextureType.doorColorTexture)

camera.position.z = 5

const { mesh, material } = useCube()

const colorTexture = doorColorTexture

colorTexture.colorSpace = THREE.SRGBColorSpace

colorTexture.generateMipmaps = false
colorTexture.minFilter = THREE.NearestFilter
colorTexture.magFilter = THREE.NearestFilter

material.map = colorTexture

scene.add(mesh)

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
