import React from 'react'

function LightBulb(props) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[1.2, 15, 15]} />
      <meshPhongMaterial emissive={'royalblue'} />
    </mesh>
  )
}

export default LightBulb
