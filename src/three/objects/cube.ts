import * as THREE from 'three'
import { textureLoader } from '@/three/loadingManager'

interface CubeProps {
  width?: number,
  height?: number,
  depth?: number,
  widthSegments?: number,
  heightSegments?: number,
  depthSegments?: number,
}

const defaultOptions: Required<CubeProps> = {
  width: 1,
  height: 1,
  depth: 1,
  widthSegments: 1,
  heightSegments: 1,
  depthSegments: 1
}
export function useCube (options?: CubeProps) {
  const optionsWithDefaults = Object.assign({}, defaultOptions, options)

  const geometry = new THREE.BoxGeometry(
    optionsWithDefaults.width,
    optionsWithDefaults.height,
    optionsWithDefaults.depth,
    optionsWithDefaults.widthSegments,
    optionsWithDefaults.heightSegments,
    optionsWithDefaults.depthSegments
  )

  const material = new THREE.MeshStandardMaterial()

  const mesh = new THREE.Mesh(geometry, material)

  return {
    mesh,
    material
  }
}
