import React from 'react';
import '../VectorForm.css';

const VectorForm = ({
    vector1, vector2, is3D, setVector1, setVector2,
    toggleDimension, calculate, clearInputs, result, calculateAndDrawVectors
}) => {
    const handleInputChange = (e, vector, component) => {
        const value = parseFloat(e.target.value);
        if (vector === 1) setVector1({ ...vector1, [component]: value });
        else setVector2({ ...vector2, [component]: value });
    };

    return (
        <form id="vectorForm" className="vector-form">
            <h2 className="form-title">Vector Calculator</h2>

            <div className="button-grid">
                <button type="button" className="styled-button toggle-btn" onClick={toggleDimension}>
                    {is3D ? "Switch to 2D" : "Switch to 3D"}
                </button>
                <button type="button" className="styled-button" onClick={() => calculate('sum')}>Sum</button>
                <button type="button" className="styled-button" onClick={() => calculate('subtract')}>Subtract</button>
                <button type="button" className="styled-button" onClick={() => calculate('dot')}>Dot Product</button>
                <button type="button" className="styled-button" onClick={() => calculate('cross')}>Cross Product</button>
                <button type="button" className="styled-button" onClick={() => calculate('angle')}>Angle</button>
                <button type="button" className="styled-button clear-btn" onClick={clearInputs}>Clear</button>
            </div>

            <div className="vector-section">
                <h3>Vector 1</h3>
                <div className="vector-inline-box">
                    <span className="vector-paren">(</span>
                    <input
                        className="vector-mini-input"
                        type="number"
                        value={vector1.x}
                        onChange={e => handleInputChange(e, 1, 'x')}
                    />
                    <span className="vector-comma">,</span>
                    <input
                        className="vector-mini-input"
                        type="number"
                        value={vector1.y}
                        onChange={e => handleInputChange(e, 1, 'y')}
                    />
                    {is3D && (
                        <>
                            <span className="vector-comma">,</span>
                            <input
                                className="vector-mini-input"
                                type="number"
                                value={vector1.z}
                                onChange={e => handleInputChange(e, 1, 'z')}
                            />
                        </>
                    )}
                    <span className="vector-paren">)</span>
                </div>
            </div>

            <div className="vector-section">
                <h3>Vector 2</h3>
                <div className="vector-inline-box">
                    <span className="vector-paren">(</span>
                    <input
                        className="vector-mini-input"
                        type="number"
                        value={vector2.x}
                        onChange={e => handleInputChange(e, 2, 'x')}
                    />
                    <span className="vector-comma">,</span>
                    <input
                        className="vector-mini-input"
                        type="number"
                        value={vector2.y}
                        onChange={e => handleInputChange(e, 2, 'y')}
                    />
                    {is3D && (
                        <>
                            <span className="vector-comma">,</span>
                            <input
                                className="vector-mini-input"
                                type="number"
                                value={vector2.z}
                                onChange={e => handleInputChange(e, 2, 'z')}
                            />
                        </>
                    )}
                    <span className="vector-paren">)</span>
                </div>
            </div>

            <button className="styled-button draw-btn" type="button" onClick={calculateAndDrawVectors}>
                Draw
            </button>
            <p id="result" className="result-text">{result}</p>
        </form>
    );
};

export default VectorForm;