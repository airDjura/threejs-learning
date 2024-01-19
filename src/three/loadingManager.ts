import * as THREE from 'three'

const loadingManager = new THREE.LoadingManager()
export const textureLoader = new THREE.TextureLoader(loadingManager)
