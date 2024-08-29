import React, { useState } from 'react';
import sum from '../calculator';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      const calculatedResult = sum(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult(error?.message ?? "error");
    }
  };

  return (   
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-300 mb-6 text-center"> Calculator Kata</h1>
        <div className="flex flex-col space-y-4">
          <textarea
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter expression"
            className="bg-gray-600  rounded-lg p-4 text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          />
          <div className="bg-gray-700 p-4 rounded-lg text-white text-2xl font-semibold text-center break-words">
            {result || 0}
          </div>
          <button
            onClick={handleCalculate}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 mx-auto"
          >
            Calculate
          </button>
        </div>
      </div>
    
  );
};

export default Calculator;
