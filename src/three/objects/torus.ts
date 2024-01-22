import * as THREE from 'three'

interface TorusOptions {
  radius?: number,
  tube?: number,
  radialSegments?: number,
  tubularSegments?: number,
  arc?: number | undefined,
  texture?: THREE.Texture | null
}

const defaultOptions: Required<TorusOptions> = {
  radius: 1,
  tube: 1,
  radialSegments: 1,
  tubularSegments: 1,
  // @ts-ignore
  arc: undefined,
  texture: null
}

export function useTorus (options?: TorusOptions) {
  const optionsWithDefaults = Object.assign({}, defaultOptions, options)

  console.log(optionsWithDefaults)

  const geometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)

  const material = new THREE.MeshMatcapMaterial()

  console.log(optionsWithDefaults.texture)
  if (optionsWithDefaults.texture) {
    material.map = optionsWithDefaults.texture
  }

  const mesh = new THREE.Mesh(geometry, material)

  return {
    mesh,
    material,
    geometry
  }
}
