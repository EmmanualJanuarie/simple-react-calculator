import { useState, useRef } from "react"; 
import "../styles/Calculator.css";

function Calculator() {
    const inputRef = useRef(null); 
    const resultRef = useRef(0); // Use useRef to store the result without causing re-renders

    const [result, setResult] = useState(resultRef.current); // Initialize state with the ref value

    function updateResult(newResult) {
        resultRef.current = newResult; // Update the ref value
        setResult(newResult); // Update the state to trigger a re-render for the display
    }

    function plus(e) { 
        e.preventDefault(); 
        updateResult(resultRef.current + Number(inputRef.current.value)); 
    }; 

    function minus(e) { 
        e.preventDefault(); 
        updateResult(resultRef.current - Number(inputRef.current.value)); 
    };

    function times(e) { 
        e.preventDefault(); 
        updateResult(resultRef.current * Number(inputRef.current.value));  
    }; 

    function divide(e) { 
        e.preventDefault(); 
        updateResult(resultRef.current / Number(inputRef.current.value)); 
    };

    function resetInput(e) { 
      e.preventDefault();
        inputRef.current.value = ''; // Reset the input field
    }; 

    function resetResult(e) { 
      e.preventDefault(); 
        updateResult(0); // Reset the result to 0
    }; 

    return ( 
        <div className="App"> 
            <div className="card">
                <div className="card-content">
                    <form> 
                        <div> 
                            <h1>Simplest Working Calculator</h1>
                        </div> 

                        <p id="result_id">Result: {result}</p>
                        <input className="input"
                            style={{
                                backgroundColor: "white",
                                color: 'black'
                            }}
                            ref={inputRef} 
                            type="number" 
                            placeholder="Type a number" 
                        /> 
                        <button className="button" onClick={plus}>Add</button> 
                        <button className="button" onClick={minus}>Subtract</button> 
                        <button className="button" onClick={times}>Multiply</button>
                        <button className="button" onClick={divide}>Divide</button> 
                        <button className="button" onClick={resetInput} 
                            style={{
                                backgroundColor: 'red'
                            }}>Reset Input</button>
                        <button className="button" onClick={resetResult}
                            style={{
                                backgroundColor: 'red'
                            }}>Reset Result</button>
                    </form>
                </div>
            </div>
        </div> 
    ); 
}

export default Calculator;