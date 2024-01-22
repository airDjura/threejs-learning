import * as THREE from 'three'
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry'

export function useText (text: string, options?: TextGeometryParameters) {
  const geometry = new TextGeometry(
    text,
    options
  )

  const material = new THREE.MeshMatcapMaterial()

  const mesh = new THREE.Mesh(geometry, material)

  return {
    mesh,
    material,
    geometry
  }
}
