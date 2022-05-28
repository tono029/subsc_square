import { Canvas, useFrame } from "@react-three/fiber";
import React, { useContext, useState } from "react";
import * as THREE from "three"
import {Mesh} from "three"
import { OrbitControls, Environment, Stars } from "@react-three/drei";



const Box = () => {
  const box = React.useRef<Mesh>(null!)
  const [isHover, setIsHover] = useState(false)

  const handleBoxClick = () => {
    console.log("click")
  }

  useFrame(() => {
    box.current.rotation.x += 0.005
    box.current.rotation.y += 0.005
    box.current.rotation.z += 0.005
    box.current.material

    // hoverでboxのscaleを変える
    let scale = (box.current.scale.x += ((isHover ? 1.3 : 1) - box.current.scale.x) * 0.1)
    box.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh 
      ref={box} 
      castShadow
      receiveShadow
      onPointerOut={() => setIsHover(false)}
      onPointerOver={() => setIsHover(true)}
      onClick={() => handleBoxClick()}
    >
      <boxBufferGeometry /> {/* geoは形の枠組み */}
      <meshStandardMaterial /> {/* matは枠組みに張り付ける紙 */}
    </mesh>
  )
}

const Plane = () => {
  return (
    <mesh
      position={[0, -2, 0]} 
      receiveShadow 
      rotation={[-Math.PI / 2, 0, 0]} 
    >
      <planeBufferGeometry args={[1000, 1000]}  />
      <meshStandardMaterial color="#4caf50" />
    </mesh>
  )
}

export default function Three() {
  return (
    <div className="scene">
      <Canvas
        className="canvas"
        shadows
        camera={{position: [2,2,2]}}
      >
        <OrbitControls />

        <Stars />

        {/* <Environment preset="sunset" background /> */}

        {/* <primitive object={new THREE.AxesHelper(5)} /> */}
        <fog attach="fog" args={["white", 0, 40]} />
  
        <spotLight position={[1, 5, 5]} castShadow />
        <ambientLight intensity={0.1} />

        <Box />

        {/* <Plane /> */}
  
      </Canvas>
    </div>
  )
}