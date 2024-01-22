import * as THREE from 'three'

interface TorusOptions {
  radius?: number,
  tube?: number,
  radialSegments?: number,
  tubularSegments?: number,
  arc?: number | undefined
}

const defaultOptions: Required<TorusOptions> = {
  radius: 0.3,
  tube: 0.2,
  radialSegments: 20,
  tubularSegments: 45,
  // @ts-ignore
  arc: undefined
}

export function useTorus (options?: TorusOptions) {
  const optionsWithDefaults = Object.assign({}, defaultOptions, options)

  const geometry = new THREE.TorusGeometry(
    optionsWithDefaults.radius,
    optionsWithDefaults.tube,
    optionsWithDefaults.radialSegments,
    optionsWithDefaults.tubularSegments,
    optionsWithDefaults.arc
  )

  const material = new THREE.MeshStandardMaterial()

  const mesh = new THREE.Mesh(geometry, material)

  return {
    mesh,
    material,
    geometry
  }
}
