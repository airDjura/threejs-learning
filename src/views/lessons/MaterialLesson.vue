<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { useRenderer } from '@/use/useRenderer'
import { TextureType, useTextures } from '@/three/loaders/textures'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import image from '@/assets/environmentMap/2k.hdr'

const { scene, camera, render } = useRenderer({
  renderCallback: (clock) => {
    const elapsedTime = clock.getElapsedTime()
    sphere.rotation.y = elapsedTime * 0.5
    torus.rotation.y = elapsedTime * 0.5
    plane.rotation.y = elapsedTime * 0.5

    sphere.rotation.x = -1 * elapsedTime * 0.5
    torus.rotation.x = -1 * elapsedTime * 0.5
    plane.rotation.x = -1 * elapsedTime * 0.5
  }
})

const { getTexture } = useTextures()

const doorColorTexture = getTexture(TextureType.doorColorTexture)
const doorAlphaTexture = getTexture(TextureType.doorAlphaTexture)
const doorAmbientOcclusionTexture = getTexture(TextureType.doorAmbientOcclusionTexture)
const doorHeightTexture = getTexture(TextureType.doorHeightTexture)
const doorNormalTexture = getTexture(TextureType.doorNormalTexture)
const doorMetalnessTexture = getTexture(TextureType.doorMetalnessTexture)
const doorRoughnessTexture = getTexture(TextureType.doorRoughnessTexture)
const matcapTexture = getTexture(TextureType.matcapTexture)
const gradientTexture = getTexture(TextureType.gradientTexture)

doorColorTexture.colorSpace = THREE.SRGBColorSpace
matcapTexture.colorSpace = THREE.SRGBColorSpace

camera.position.z = 3

const material = new THREE.MeshPhysicalMaterial({
  side: THREE.DoubleSide
})

material.metalness = 1
material.roughness = 1

material.map = doorColorTexture
material.aoMap = doorAmbientOcclusionTexture
material.aoMapIntensity = 1
material.displacementMap = doorHeightTexture
material.displacementScale = 0.1
material.metalnessMap = doorMetalnessTexture
material.roughnessMap = doorRoughnessTexture
material.normalMap = doorNormalTexture
material.normalScale.set(0.5, 0.5)
material.alphaMap = doorAlphaTexture
material.transparent = true

// material.clearcoat = 1
// material.clearcoatRoughness = 1

// material.sheen = 1
// material.sheenRoughness = 1
// material.sheenColor.set(1, 1, 1)

// material.iridescence = 1
// material.iridescenceIOR = 1
// material.iridescenceThicknessRange = [100, 800]

// material.transmission = 1
// material.ior = 1.5
// material.thickness = 0.5

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 64, 64),
  material
)

sphere.position.x = -2

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1, 100, 100),
  material
)

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 64, 128),
  material
)

torus.position.x = 2

scene.add(sphere, plane, torus)

const rgbeLoader = new RGBELoader()

rgbeLoader.load('/textures/environmentMap/2k.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping
  scene.environment = texture
  scene.background = texture
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
