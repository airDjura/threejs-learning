<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">

import { useRenderer } from '@/use/useRenderer'
import { useLoader } from '@/three/loadingManager'
import { useText } from '@/three/objects/text'
import { TextureType, useTextures } from '@/three/loaders/textures'
import { Mesh, MeshMatcapMaterial, SRGBColorSpace, TorusGeometry } from 'three'

const { scene, camera } = useRenderer({})
const { getTexture } = useTextures()

const matcapTexture = getTexture(TextureType.matcapTexture)
matcapTexture.colorSpace = SRGBColorSpace

const { loadFont } = useLoader()

camera.position.z = 3
camera.position.y = 0.5

loadFont('/fonts/helvetiker_regular.typeface.json', (font) => {
  const { mesh: textMesh, material: textMaterial, geometry: textGeometry } = useText('League Engine', {
    font,
    size: 0.5,
    height: 0.2,
    curveSegments: 4,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 4
  })

  textMaterial.matcap = matcapTexture
  textMaterial.normalScale.set(0.5, 0.5)

  textGeometry.center()

  scene.add(textMesh)
})

const torusGeometry = new TorusGeometry(0.3, 0.2, 20, 45)
const torusMaterial = new MeshMatcapMaterial()
torusMaterial.matcap = matcapTexture

for (let i = 0; i < 100; i++) {
  const torusMesh = new Mesh(torusGeometry, torusMaterial)
  torusMesh.position.x = (Math.random() - 0.5) * 15
  torusMesh.position.y = (Math.random() - 0.5) * 15
  torusMesh.position.z = (Math.random() - 0.5) * 15

  torusMesh.rotation.x = Math.random() * Math.PI
  torusMesh.rotation.y = Math.random() * Math.PI

  const scaleValue = Math.max(Math.random(), 0.5)

  torusMesh.scale.y = scaleValue
  torusMesh.scale.x = scaleValue
  torusMesh.scale.z = scaleValue

  scene.add(torusMesh)
}

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
