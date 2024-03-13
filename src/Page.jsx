import React, { useState } from 'react';
import './page.css';

const Page = () => {
    const [algorithm, setAlgorithm] = useState('');
    const [executionTime, setExecutionTime] = useState(null);
    const [memoryUsage, setMemoryUsage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        analyzeComplexity();
    };

    const analyzeComplexity = () => {
        let startTime, endTime, executionTime;
        let memoryUsage = 0;

        // Start performance measurement
        startTime = performance.now();

        // Execute the algorithm
        const result = evaluateAlgorithm(algorithm);
        console.log(result);

        // End performance measurement
        endTime = performance.now();

        // Calculate execution time
        executionTime = endTime - startTime;
        setExecutionTime(executionTime);

        // Measure memory usage if supported by the browser
        if (performance.memory) {
            memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024;
            setMemoryUsage(memoryUsage);
        } else {
            console.warn('Memory usage measurement is not supported by this browser.');
        }
    };

    const evaluateAlgorithm = (algorithm) => {
        // Use eval to execute the JavaScript algorithm
        return eval(algorithm);
    };

    return (
        <>
            <p id='name'>Complexity checker</p>
            <p id='info'>⚠️Disclaimer: The Complexity Checker provided in this application is intended for experimetal purposes only.
                It utilizes browser performance measurement tools to estimate the execution time and memory usage of algorithms.
                However, please note that due to various factors such as browser limitations and the nature of JavaScript execution,
                the results provided by this tool may not be entirely accurate or representative of real-world performance.
                Therefore, it is recommended to use this tool for educational experimentation and understanding rather than relying solely on its results for critical decision-making.
                By using this application, you agree to acknowledge the limitations of the Complexity Checker and understand that it does not provide precise or guaranteed accuracy in its analysis.
            </p>
            <p id='instruct'>Drop the function below👇</p>
            <div className="center">
                <div className="page">
                    Algorithm:
                    <textarea value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Analyze Complexity</button>
                </div>

                <div className="output">
                    {executionTime && <p>Execution Time: {executionTime} milliseconds</p>}
                    {memoryUsage && <p>Memory Usage: {memoryUsage.toFixed(2)} MB</p>}
                </div>
            </div>
        </>
    );
};

export default Page;
