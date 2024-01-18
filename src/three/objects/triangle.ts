import * as THREE from 'three'

export function triangleMash () {
  const geometry = new THREE.BufferGeometry()
  const count = 500
  const positionsArray = new Float32Array(count * 3 * 3)

  for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 5
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3))

  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

  return new THREE.Mesh(geometry, material)
}
