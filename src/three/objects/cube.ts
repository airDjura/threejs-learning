import * as THREE from 'three'
const textureLoader = new THREE.TextureLoader()

export function cubeMash () {
  const texture = textureLoader.load('/textures/000.jpg')
  texture.colorSpace = THREE.SRGBColorSpace
  const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4)
  const material = new THREE.MeshStandardMaterial({ map: texture })

  const cube = new THREE.Mesh(geometry, material)

  return {
    cube,
    texture
  }
}
