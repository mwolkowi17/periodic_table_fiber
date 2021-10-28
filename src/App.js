

import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import { Box } from './box'
import { CameraControls } from './orbitControl'
import { Plane, Html, Text } from '@react-three/drei'
import { table } from "./data"
import {Box} from './box'
extend({ OrbitControls });




export default function App() {

  const textA = table[1];
  const textB = table[0];

  //work in progress
  const refPlane = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)


  const elementsSetBase = []

  for (let i = 0; i < table.length; i += 6) {
    elementsSetBase.push([(table[i + 3] * 140) - 1330, - (table[i + 4] * 180) + 990, 0])

  }
  console.log(elementsSetBase);


  const elementsSetFinal = elementsSetBase.map((element, i) =>
  
  (<Plane key={i} args={[120, 120]}
    position={element}
    ref={refPlane}
    scale={active ? 1.5 : 1}
    onClick={(event) => setActive(!active)}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}
  >
    <meshPhongMaterial attach="material" color={hovered ? '#005683' : '#0077b6'} />
    <Html occlude >
      hi

    </Html>
    <Text color="black" fontSize="0.1" anchorX="center" anchorY="middle" position={[0, 0.1, 0.01]}>
      {textA}
    </Text>
    <Text color="black" fontSize="0.2" position={[0, -0.2, 0.01]}>
      {textB}
    </Text>

  </Plane>)




  )



  return (
    <div id="canvas-container">
      <Canvas id="my" camera={{ fov: 40, near: 0.1, far: 10000, position: [0, 0, 3000]  }}>
        <CameraControls />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {elementsSetFinal}
        <Box position={[-3.2, 0, 0]} >

  </Box >
        {/*<Box position={[3.2, 0, 0]} />*/}
        {/*<Plane args={[1, 1]}
          position={[2,0,0]}
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

</Plane>*/}
      </Canvas>,
    </div>
  )


}



ReactDOM.render(<App />, document.getElementById('root'))
