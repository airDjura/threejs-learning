import * as THREE from 'three'

interface CubeProps {
  radius?: number,
  widthSegments?: number,
  heightSegments?: number,
  phiStart?: number | undefined,
  phiLength?: number | undefined,
  thetaStart?: number | undefined,
  thetaLength?: number | undefined,
}

const defaultOptions: Required<CubeProps> = {
  radius: 0.5,
  widthSegments: 32,
  heightSegments: 32,
  // @ts-ignore
  phiStart: undefined,
  // @ts-ignore
  phiLength: undefined,
  // @ts-ignore
  thetaStart: undefined,
  // @ts-ignore
  thetaLength: undefined
}
export function useSphere (options?: CubeProps) {
  const optionsWithDefaults = Object.assign({}, defaultOptions, options)

  const geometry = new THREE.SphereGeometry(
    optionsWithDefaults.radius,
    optionsWithDefaults.widthSegments,
    optionsWithDefaults.heightSegments,
    optionsWithDefaults.phiStart,
    optionsWithDefaults.phiLength,
    optionsWithDefaults.thetaStart,
    optionsWithDefaults.thetaLength
  )

  const material = new THREE.MeshStandardMaterial()

  const mesh = new THREE.Mesh(geometry, material)

  return {
    mesh,
    material,
    geometry
  }
}
