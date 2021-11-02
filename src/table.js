
import React, { useRef, useState } from 'react';

import { Html } from '@react-three/drei';
import { table } from "./data";
import { Display } from './display';

//import { getData } from './ajaxgetter2';



export function Table(props) {
    const refPlane = useRef()
    const group = useRef()



    const elementsSetBase = []


    for (let i = 0; i < table.length; i += 6) {
        //elementsSetBase.push([(table[i + 3] * 140) - 1330, - (table[i + 4] * 180) + 990, 0, table[i], table[i + 1]])
        elementsSetBase.push([(table[i + 3] * 3) - 30, - (table[i + 4] * 3.1) + 18, 0, table[i], table[i + 1], table[i + 2]])

    }
   
    //display info
    const [count, setCount] = useState(0);


    const [ifVisible, setVisible] = useState(false);

    const [elementNameToDsiplay, setElementNameToDisplay] = useState('');
    const [atomicWeightToDisplay, setAtomicWeightToDisplay] = useState('');
    const [atomicDescriptionToDisplay, setAtomicDescriptionToDispaly] = useState('');

    const wynikToDisplay = require('./ajaxgetter2.js');

    //

    //search begin
    const searching_results = [];
    const[value, setValue]=useState('');
    //console.log(value)
    //string transformation
    const valueToArray = value.split('');
    if(valueToArray.length!==0){
        valueToArray[0]=valueToArray[0].toUpperCase();
    }
    const valueToCheck = valueToArray.join('');
    //
    if(value!=='') {
        for (let i = 0; i < elementsSetBase.length; i++) {
            if ((elementsSetBase[i][3]) === valueToCheck) {
                searching_results.push(elementsSetBase[i]);
                console.log('pushed')
            }
         
            
        }
        
        console.log('value');
        console.log(searching_results)
    }

    const searching_result_map = searching_results.map((element, i) => (
        <group key={i} ref={group} position={[element[0], element[1], 0]} rotation={[0, 0, 0]} >
            <mesh key={"a" + i} ref={refPlane} >
                <planeGeometry args={[2, 2, 2]} />
                <meshBasicMaterial attach="material" color={'black'} />
            </mesh>
            <Html key={"b" + i} position={[0, 0.05, 0.09]} transform occlude  >
                <button onClick={() => {

                    setCount(count + 1);
                    setVisible(true);
                    //setOffDisplay(true)
                    setElementNameToDisplay(element[4])
                    setAtomicWeightToDisplay(element[5])
                    setAtomicDescriptionToDispaly(wynikToDisplay.getData(i))
                    console.log(atomicDescriptionToDisplay)

                }}>
                    <div className='OneElement' id={element[3]} style={{ backgroundColor: 'rgba(255,127,170,' + (Math.random() * 0.5 + 0.25) + ')' }}>
                        {element[3]}
                    </div>

                    <div className='name'>
                        {element[4]}
                    </div>
                </button>
            </Html>
        </group>)
    )


    //

    const elementsSetFinal = elementsSetBase.map((element, i) =>

    (<group key={i} ref={group} position={[element[0], element[1], 0]} rotation={[0, 0, 0]} >
        <mesh key={"a" + i} ref={refPlane} >
            <planeGeometry args={[2, 2, 2]} />
            <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <Html key={"b" + i} position={[0, 0.05, 0.09]} transform occlude  >
            <button onClick={() => {

                setCount(count + 1);
                setVisible(true);
                //setOffDisplay(true)
                setElementNameToDisplay(element[4])
                setAtomicWeightToDisplay(element[5])
                setAtomicDescriptionToDispaly(wynikToDisplay.getData(i))
                console.log(atomicDescriptionToDisplay)

            }}>
                <div className='OneElement' id={element[3]} style={{ backgroundColor: 'rgba(0,127,100,' + (Math.random() * 0.5 + 0.25) + ')' }}>
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
            {searching_result_map}
            <Display ifvisibleA={ifVisible ? 'visible' : 'hidden'}
                elementName={elementNameToDsiplay}
                atomicWeight={atomicWeightToDisplay}
                atomicDescription={atomicDescriptionToDisplay.replace(/<p>/g, ' ').replaceAll('</p>', '')}
                functionToClose={() => setVisible(false)}
            />
            <Html>
                <div className='searcher'>
                    <span>
                    Search
                    </span>
                        
                    
                    <input className='searchinput' onChange={(e => setValue(e.target.value))}>
                    </input>
                    
                </div>
            </Html>
        </group>
    )

}