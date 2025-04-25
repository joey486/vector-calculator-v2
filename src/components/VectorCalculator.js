import React, { useState, useRef } from 'react';
import VectorForm from './VectorForm'; 
import VectorVisualization from './VectorVisualization'; 
import useCursor from './CursorEffects';
import { calculateVectorOperation } from '../utils/vectorMath'; 

const VectorCalculator = () => {
    const [vector1, setVector1] = useState({ x: 0, y: 0, z: 0 });
    const [vector2, setVector2] = useState({ x: 0, y: 0, z: 0 });
    const [result, setResult] = useState('');
    const [is3D, setIs3D] = useState(true);
    const cursorDot = useRef(null);
    const cursorOutline = useRef(null);

    
    useCursor(cursorDot, cursorOutline);

    const toggleDimension = () => setIs3D(prev => !prev);

    const calculate = (operation) => {
        const res = calculateVectorOperation(operation, vector1, vector2, is3D);
        setResult(res);
    };

    const clearInputs = () => {
        setVector1({ x: 0, y: 0, z: 0 });
        setVector2({ x: 0, y: 0, z: 0 });
        setResult('');
    };


    return (
        <div>
            <div className='background'>
                <div ref={cursorDot} className="cursor-dot" data-cursor-dot></div>
                <div ref={cursorOutline} className="cursor-outline" data-cursor-outline></div>
                <div className="container">
                    <div className="content">
                        <VectorForm
                            vector1={vector1}
                            vector2={vector2}
                            setVector1={setVector1}
                            setVector2={setVector2}
                            is3D={is3D}
                            toggleDimension={toggleDimension}
                            calculate={calculate}
                            clearInputs={clearInputs}
                            result={result}
                        />
                    </div>
                    <VectorVisualization vector1={vector1} vector2={vector2} is3D={is3D} />
                </div>
            </div>
        </div>
    );
};

export default VectorCalculator;