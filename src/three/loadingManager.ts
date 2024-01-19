import * as THREE from 'three'

const loadingManager = new THREE.LoadingManager()
export const textureLoader = new THREE.TextureLoader(loadingManager)

export function useTextureLoader () {
  function loadTexture (url: string) {
    return textureLoader.load(url)
  }

  return {
    textureLoader,
    loadingManager,
    loadTexture
  }
}
