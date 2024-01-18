import * as THREE from 'three'

export function cubeMash () {
  const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4)
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  return new THREE.Mesh(geometry, material)
}
