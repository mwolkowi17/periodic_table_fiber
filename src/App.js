

import ReactDOM from 'react-dom'
import React, { useRef } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CameraControls } from './orbitControl'
import { Html } from '@react-three/drei'
import { table } from "./data"

extend({ OrbitControls });


export default function App() {

  const refPlane = useRef()
  const group = useRef()
  const oneElement = 'OneElement';
  const elementsSetBase = []


  for (let i = 0; i < table.length; i += 6) {
    //elementsSetBase.push([(table[i + 3] * 140) - 1330, - (table[i + 4] * 180) + 990, 0, table[i], table[i + 1]])
    elementsSetBase.push([(table[i + 3] * 3) - 30, - (table[i + 4] * 3.1) + 18, 0, table[i], table[i + 1]])

  }


  const elementsSetFinal = elementsSetBase.map((element, i) =>

  (<group key={i} ref={group} position={[element[0], element[1], 0]} rotation={[0, 0, 0]}>
    <mesh key={"a"+i} ref={refPlane}>
      <planeGeometry args={[2, 2, 2]} />
      <meshBasicMaterial attach="material" color={'black'} />
    </mesh>
    <Html key={"b"+i} position={[0, 0.05, 0.09]} transform occlude>
      <div className={oneElement} id={element[3]} style={{ backgroundColor: 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')' }}>
        {element[3]}
      </div>
      <div className='name'>
        {element[4]}
      </div>
    </Html>
  </group>)
  )


  window.dispatchEvent(new Event('resize'))

  return (
    <div id="canvas-container">
      <Canvas id="my" camera={{ fov: 40, near: 0.1, far: 10000, position: [0, 0, 50] }}>
        <CameraControls />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {elementsSetFinal}

      </Canvas>,
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
