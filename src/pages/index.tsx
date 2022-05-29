import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Signup from 'src/components/Signup'
import Three from 'src/Three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'

const Home: NextPage = () => {

  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/light-string.glb");
    return (
      <primitive 
        object={gltf.scene} 
        scale={0.4}
        position={[0, 0, 0]}
      />
    );
  };

  return (
    // <div className='home-page'>
    //   <div className='home-text'>
    //     <h2>Subsc Squareは～</h2>
  
    //     <p>説明文</p>
    //   </div>

    //   <Three />

    //   <Signup />

    // </div>

    <>
      <div className='home-text'>
        <h2 onClick={() => console.log("click")}>Subsc Squareは～</h2>

        <p>説明文</p>
      </div>
  
      <Canvas>
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[1, 5, 5]} 
          castShadow 
          shadow-mapSize-width={2048} // 描画精度
          shadow-mapSize-height={2048}
        />

        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Home
