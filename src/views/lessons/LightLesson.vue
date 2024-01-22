<template>
  <div class="home">
    <canvas class="webgl"></canvas>
  </div>
</template>

<script setup lang="ts">
import { useRenderer } from '@/use/useRenderer'
import { useCube } from '@/three/objects/cube'
import { useSphere } from '@/three/objects/sphere'
import { useTorus } from '@/three/objects/torus'
import { DirectionalLight, HemisphereLight, Mesh, MeshStandardMaterial, PlaneGeometry, PointLight } from 'three'

const { scene, camera } = useRenderer()

camera.position.z = 5

const material = new MeshStandardMaterial()
material.roughness = 0.4

const plane = new Mesh(
  new PlaneGeometry(6, 6),
  material
)

scene.add(plane)

plane.rotation.x = -Math.PI * 0.5
plane.position.y = -1

const { mesh: meshSphere } = useSphere()
meshSphere.position.x = -2

const { mesh: meshCube } = useCube()
meshCube.position.x = 0

const { mesh: meshTorus } = useTorus()

meshTorus.position.x = 2

scene.add(meshTorus)

scene.add(meshSphere)

scene.add(meshCube)

const directionalLight = new DirectionalLight('#ffffff', 1.5)
directionalLight.position.set(1, 0.25, 0)
scene.add(directionalLight)

const hemisphereLight = new HemisphereLight(0xff0000, 0x0000ff, 1)
scene.add(hemisphereLight)

const pointLight = new PointLight(0xff9000, 2.5)
scene.add(pointLight)

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
