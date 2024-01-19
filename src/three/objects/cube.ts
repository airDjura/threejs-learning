import * as THREE from 'three'

export function cubeMash () {
  const image = new Image()
  const texture = new THREE.Texture(image)
  texture.colorSpace = THREE.SRGBColorSpace
  const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4)
  const material = new THREE.MeshStandardMaterial({ map: texture })

  const cube = new THREE.Mesh(geometry, material)

  return {
    cube,
    image,
    texture
  }
}
