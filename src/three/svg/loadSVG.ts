import { SVGLoader, SVGResult } from 'three/examples/jsm/loaders/SVGLoader'
import * as THREE from 'three'

const loader = new SVGLoader()

export function loadSVG (url: string): Promise<THREE.Group> {
  const group = new THREE.Group()

  return new Promise((resolve, reject) => {
    loader.load(url, (data: SVGResult) => {
      const paths = data.paths

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i]

        const material = new THREE.MeshStandardMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false
        })

        const shapes = SVGLoader.createShapes(path)

        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j]
          const geometry = new THREE.ExtrudeGeometry(shape, { depth: 50, bevelEnabled: false })
          const shapeMash = new THREE.Mesh(geometry, material)
          group.add(shapeMash)
        }
      }

      resolve(group)
    }, undefined, (error) => {
      reject(error)
    })
  })
}
