
import React, { useRef, useState } from 'react'

import { Html } from '@react-three/drei'
import { table } from "./data"

export function Table() {
    const refPlane = useRef()
    const group = useRef()



    const elementsSetBase = []


    for (let i = 0; i < table.length; i += 6) {
        //elementsSetBase.push([(table[i + 3] * 140) - 1330, - (table[i + 4] * 180) + 990, 0, table[i], table[i + 1]])
        elementsSetBase.push([(table[i + 3] * 3) - 30, - (table[i + 4] * 3.1) + 18, 0, table[i], table[i + 1]])

    }



    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    const [count, setCount] = useState(0);
    const sayHello = () => {
        alert("Hello!");
    };


    const elementsSetFinal = elementsSetBase.map((element, i) =>

    (<group key={i} ref={group} position={[element[0], element[1], 0]} rotation={[0, 0, 0]} >
        <mesh key={"a" + i} ref={refPlane}  onClick={() => {
                    sayHello();
                    setCount(count + 1);

                }} >
            <planeGeometry args={[2, 2, 2]} />
            <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <Html key={"b" + i} position={[0, 0.05, 0.09]} transform occlude  >
       <a  onClick={() => {
          sayHello();
          setCount(count + 1);
        }}>
            <div className='OneElement' id={element[3]} style={{ backgroundColor: 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')' }}>
                
                    {element[3]}
               
            </div>

            <div className='name'>
                {element[4]}
            </div>
          </a>  
        </Html>
    </group>)
    )

    return (
        elementsSetFinal

    )

}