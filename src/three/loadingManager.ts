import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

const loadingManager = new THREE.LoadingManager()

const textureLoader = new THREE.TextureLoader(loadingManager)

const fontLoader = new FontLoader(loadingManager)

export function useLoader () {
  function loadTexture (url: string) {
    return textureLoader.load(url)
  }

  function loadFont (url: string, loadCallback: (data: any) => void, onProgress?: (event: ProgressEvent) => void, onError?: (err: unknown) => void) {
    return fontLoader.load(url, loadCallback, onProgress, onError)
  }

  return {
    loadingManager,
    loadTexture,
    loadFont
  }
}
