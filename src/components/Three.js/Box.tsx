import { useFrame } from "@react-three/fiber";
import React, { useMemo, useState } from "react";
import * as THREE from "three"
import {Mesh} from "three"



const createGeometry = () => {
  const geo = new THREE.BoxGeometry(2, 2, 2, 32, 32, 32)

  geo.morphAttributes.position = []

  const positionAttribute = geo.attributes.position

  // for the first morph target we'll move the cube's vertices onto the surface of a sphere
  const spherePositions = []

  // for the second morph target, we'll twist the cubes vertices
  const twistPositions: string | number | any[] | ArrayLike<number> | ArrayBuffer | undefined = []
  
  const direction = new THREE.Vector3(1, 0, 0)
  const vertex = new THREE.Vector3()

  for (let i = 0; i < positionAttribute.count; i++) {
    const x = positionAttribute.getX(i)
    const y = positionAttribute.getY(i)
    const z = positionAttribute.getZ(i)

    spherePositions.push(
      x * Math.sqrt(1 - (y * y) / 2 - (z * z) / 2 + (y * y * z * z) / 3),
      y * Math.sqrt(1 - (z * z) / 2 - (x * x) / 2 + (z * z * x * x) / 3),
      z * Math.sqrt(1 - (x * x) / 2 - (y * y) / 2 + (x * x * y * y) / 3)
    )

    // stretch along the x-axis so we can see the twist better
    vertex.set(x * 1.5, y, z)

    vertex.applyAxisAngle(direction, (Math.PI * x) / 2).toArray(twistPositions, twistPositions.length)
  }

  // add the spherical positions as the first morph target
  geo.morphAttributes.position[0] = new THREE.Float32BufferAttribute(spherePositions, 3)

  // add the twisted positions as the second morph target
  geo.morphAttributes.position[1] = new THREE.Float32BufferAttribute(twistPositions, 3)

  console.log(geo)
  return geo
}

const Box = ({ spherify = 0, twist = 0, ...props }) => {
  const influences = [spherify, twist]
  const box = React.useRef<Mesh>(null!)
  const [isHover, setIsHover] = useState(false)
  const geoMemo = useMemo(() => createGeometry(), [])

  const handleBoxClick = () => {
    console.log("click")
  }

  useFrame(() => {
    box.current.rotation.x += 0.005
    box.current.rotation.y += 0.005
    box.current.rotation.z += 0.005

    // hoverでboxのscaleを変える
    // let scale = (box.current.scale.x += ((isHover ? 1.3 : 1) - box.current.scale.x) * 0.1)
    // box.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh
      {...props}
      ref={box} 
      castShadow
      receiveShadow
      onPointerOut={() => setIsHover(false)}
      onPointerOver={() => setIsHover(true)}
      onClick={() => handleBoxClick()}
      geometry={geoMemo} 
      morphTargetInfluences={influences}
    >
      {/* <boxBufferGeometry /> geoは形の枠組み */}
      <meshStandardMaterial color="teal" /> {/* matは枠組みに張り付ける紙 */}
    </mesh>
  )
}

export default Box;