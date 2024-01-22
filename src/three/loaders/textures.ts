import { useLoader } from '@/three/loadingManager'

const { loadTexture } = useLoader()

export enum TextureType {
  doorColorTexture = '/textures/door/color.jpg',
  doorAlphaTexture = '/textures/door/alpha.jpg',
  doorAmbientOcclusionTexture = '/textures/door/ambientOcclusion.jpg',
  doorHeightTexture = '/textures/door/height.jpg',
  doorNormalTexture = '/textures/door/normal.jpg',
  doorMetalnessTexture = '/textures/door/metalness.jpg',
  doorRoughnessTexture = '/textures/door/roughness.jpg',
  matcapTexture = '/textures/matcaps/1.png',
  gradientTexture = '/textures/gradients/3.jpg',
}

export function useTextures () {
  function getTexture (texture: TextureType) {
    return loadTexture(texture)
  }

  return {
    getTexture
  }
}
