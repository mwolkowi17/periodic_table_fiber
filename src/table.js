
import React, { useRef, useState } from 'react'

import { Html } from '@react-three/drei'
import { table } from "./data"
import { Display } from './display'



export function Table(props) {
    const refPlane = useRef()
    const group = useRef()



    const elementsSetBase = []


    for (let i = 0; i < table.length; i += 6) {
        //elementsSetBase.push([(table[i + 3] * 140) - 1330, - (table[i + 4] * 180) + 990, 0, table[i], table[i + 1]])
        elementsSetBase.push([(table[i + 3] * 3) - 30, - (table[i + 4] * 3.1) + 18, 0, table[i], table[i + 1]])

    }
    //display info
    const [count, setCount] = useState(0);
    const sayHello = () => {
        alert("Hello!");
    };

    const [ifVisible, setVisible]=useState(false);
    const [OffDispaly, setOffDisplay]=useState(false)


    //


    const elementsSetFinal = elementsSetBase.map((element, i) =>

    (<group key={i} ref={group} position={[element[0], element[1], 0]} rotation={[0, 0, 0]} >
        <mesh key={"a" + i} ref={refPlane}  onClick={() => {
                    sayHello();
                    setCount(count + 1);
                    setVisible()
                    console.log(count)
                }} >
            <planeGeometry args={[2, 2, 2]} />
            <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <Html key={"b" + i} position={[0, 0.05, 0.09]} transform occlude  >
       <button  onClick={() => {
          
          setCount(count + 1);
          setVisible(true);
          setOffDisplay(true)
         
        }}>
            <div className='OneElement' id={element[3]} style={{ backgroundColor: 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')' }}>
                
                    {element[3]}
               
            </div>

            <div className='name'>
                {element[4]}
            </div>
          </button>  
        </Html>
    </group>)
    )

    return (
       <group>
        {elementsSetFinal}
        <Display ifvisibleA ={ifVisible?'visible':'hidden'}  />
        <Html  >
            <div className='displayOff' onClick={()=>{
                setVisible(false)
                setOffDisplay(false)
            }} style={{visibility:OffDispaly?'visible':'hidden'}}>
            [close display]
            </div>
        </Html>
        </group>
    )

}