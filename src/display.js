
import React, { useRef} from 'react'
import { Html } from '@react-three/drei'


export function Display(props) {

    const displayObject = useRef();





    return (
        <group position={[-25, 5, -1]}>

            <Html ref={displayObject} position={[0, 0.05, 2]} >

                <div className={'display'} style={{ backgroundColor: 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')', visibility: props.ifvisibleA }}>
                    {props.elementName}
                    <div className='displayOff2' onClick={props.functionToClose}>
                        [x]close
                    </div>
                    <div className={'atomicnumber'}>
                        atomic weight: {props.atomicWeight}
                    </div>
                    <div className={'atomicDescription'}>
                        Description: {props.atomicDescription}
                    </div>
                </div>
            </Html>
        </group>
    )
}
