

import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import { Box } from './box'
import { CameraControls } from './orbitControl'
import { Plane, Html, Text } from '@react-three/drei'
import {table} from "./data"
extend({ OrbitControls });




export default function App() {

  const textA = table[1];
  const textB = table[0];

  //work in progress
  const refPlane = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  

  

  return (
    <div id="canvas-container">
      <Canvas id="my">
        <CameraControls />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/*<Box position={[-3.2, 0, 0]} >

  </Box >*/}
        {/*<Box position={[3.2, 0, 0]} />*/}
        <Plane args={[1, 1]}
          ref={refPlane}
          scale={active ? 1.5 : 1}
          onClick={(event) => setActive(!active)}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <meshPhongMaterial attach="material"  color={hovered ? '#005683' : '#0077b6'} />
          <Html occlude className="testhtml" >
            hi

          </Html>
          <Text color="black" fontSize="0.1" anchorX="center" anchorY="middle" position={[0, 0.1, 0.01]}>
            {textA}
          </Text>
          <Text color="black" fontSize="0.2" position={[0, -0.2, 0.01]}>
            {textB}
          </Text>

        </Plane>
      </Canvas>,
    </div>
  )

  
}



ReactDOM.render(<App />, document.getElementById('root'))
