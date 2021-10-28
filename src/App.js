

import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import { Box } from './box'
import { CameraControls } from './orbitControl'
import { Plane, Html, Text } from '@react-three/drei'
import { table } from "./data"

extend({ OrbitControls });




export default function App() {

  const textA = table[1];
  const textB = table[0];

  //work in progress
  const refPlane = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const oneElement='OneElement';
  const elementsSetBase = []

  
  for (let i = 0; i < table.length; i += 6) {
    elementsSetBase.push([(table[i + 3] * 140) - 1330, - (table[i + 4] * 180) + 990, 0,table[i],table[i + 1]])

  }
  

  const elementsSetFinal = elementsSetBase.map((element, i) =>
  
  (<Plane key={i} args={[120, 120]}
    position={[element[0],element[1],0]}
    ref={refPlane}
    scale={active ? 1.5 : 1}
    /*onClick={(event) => setActive(!active)}*/
    /*onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}*/
  >
    {/*<meshPhongMaterial attach="material" color={hovered ? '#005683' : '#0077b6'} />*/}
    <meshPhongMaterial attach="material" color={hovered ? '#005683' : 'black'} />
    <Html occlude={[refPlane]}  className={oneElement} style={{backgroundColor:'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'}} >
      {element[3]}

    </Html>
    {/*<Text color="black" fontSize="50" anchorX="center" anchorY="middle" position={[0, 20, 0.05]}>
      {textB}
    </Text>
    <Text color="black" fontSize="25" position={[0, -20, 0.05]}>
      {textA}
    </Text>*/}

  </Plane>)




  )



  return (
    <div id="canvas-container">
      <Canvas id="my" camera={{ fov: 40, near: 0.1, far: 10000, position: [0, 0, 3000]  }}>
        <CameraControls />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {elementsSetFinal}
        {/*<Box position={[-3.2, 0, 0]} >

  </Box >*/}
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
