import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'

function Floor (props) {
  const texture = useLoader(TextureLoader, 'bg1.png')

  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[0.6, 0.6, 0.01]} />
      <meshPhysicalMaterial color ="grey" />
    </mesh>
  )
}

export default Floor
