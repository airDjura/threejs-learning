import * as THREE from 'three'
import { textureLoader } from '@/three/loadingManager'

export function cubeMash () {
  const colorTexture = textureLoader.load('/textures/door/000.jpg')
  // const alphaTexture = textureLoader.load('/textures/001.jpg')
  // const heightTexture = textureLoader.load('/textures/002.png')
  // const normalTexture = textureLoader.load('/textures/003.jpg')
  // const ambientOcclusionTexture = textureLoader.load('/textures/004.jpg')
  // const metalnessTexture = textureLoader.load('/textures/005.jpg')
  // const roughnessTexture = textureLoader.load('/textures/006.jpg')

  colorTexture.colorSpace = THREE.SRGBColorSpace

  colorTexture.generateMipmaps = false
  colorTexture.minFilter = THREE.NearestFilter
  colorTexture.magFilter = THREE.NearestFilter

  const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4)
  // const geometry = new THREE.SphereGeometry(1, 32, 32)
  const material = new THREE.MeshStandardMaterial({ map: colorTexture })

  const cube = new THREE.Mesh(geometry, material)

  return {
    cube
  }
}
