import * as THREE from 'three'
import { textureLoader } from '@/three/loadingManager'

export function cubeMash () {
  const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4)
  // const geometry = new THREE.SphereGeometry(1, 32, 32)
  const material = new THREE.MeshStandardMaterial()

  const cube = new THREE.Mesh(geometry, material)

  return {
    cube,
    material
  }
}
