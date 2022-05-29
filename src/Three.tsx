import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import * as THREE from "three"
import { useControls } from "leva";
import { OrbitControls, Stars, Stats, MeshWobbleMaterial } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Box from "./components/Three.js/Box";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/light-string.glb");
  return (
    <>
      <primitive 
        object={gltf.scene} 
        scale={0.4}
        position={[0, 0, 0]}
      />
    </>
  );
};

// const Plane = () => {
//   return (
//     <mesh
//       position={[0, -2, 0]} 
//       receiveShadow 
//       rotation={[-Math.PI / 2, 0, 0]} 
//     >
//       <planeBufferGeometry args={[1000, 1000]}  />
//       <meshStandardMaterial color="#4caf50" />
//     </mesh>
//   )
// }


export default function Three() {
  const { spherify, twist } = useControls({
    spherify: {
      label: 'Spherify',
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    },
    twist: {
      label: 'Twist',
      value: 0,
      min: 0,
      max: 2,
      step: 0.01,
    },
  })

  return (
    <div className="scene">
      
      <Canvas
        className="canvas"
        shadows
        camera={{position: [2,2,2]}}
      >
        <OrbitControls />
        
        <Stats />
        <Stars />

        <primitive object={new THREE.AxesHelper(5)} />
  
        <spotLight 
          position={[1, 5, 5]} 
          castShadow 
          shadow-mapSize-width={2048} // 描画精度
          shadow-mapSize-height={2048}
        />
        <ambientLight intensity={0.1} />

        <Box spherify={spherify} twist={twist} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

  
      </Canvas>
    </div>
  )
}