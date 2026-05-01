import { useState } from 'react';
import './PackagingCalculator.css';

type Result = {
  bags: number;
  recommendation: string;
} | null;

const PackagingCalculator = () => {
  const [boxSize, setBoxSize] = useState({ length: '', width: '', height: '' });
  const [result, setResult] = useState<Result>(null);

  const calculate = () => {
    const l = parseFloat(boxSize.length) || 0;
    const w = parseFloat(boxSize.width) || 0;
    const h = parseFloat(boxSize.height) || 0;
    
    if (l && w && h) {
      const volume = l * w * h;
      const bags = Math.ceil(volume / 1000);
      setResult({
        bags: bags,
        recommendation: volume < 5000 ? 'Standard Duggage Bag' : 
                     volume < 15000 ? 'Heavy-Duty Duggage Bag' : 'Compact Roll'
      });
    }
  };

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <h2>Packaging Calculator</h2>
        <p>Enter your box dimensions to find the right duggage</p>
        
        <div className="calculator-inputs">
          <div className="input-group">
            <label>Length (cm)</label>
            <input 
              type="number" 
              placeholder="30"
              value={boxSize.length}
              onChange={(e) => setBoxSize({...boxSize, length: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label>Width (cm)</label>
            <input 
              type="number" 
              placeholder="20"
              value={boxSize.width}
              onChange={(e) => setBoxSize({...boxSize, width: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label>Height (cm)</label>
            <input 
              type="number" 
              placeholder="20"
              value={boxSize.height}
              onChange={(e) => setBoxSize({...boxSize, height: e.target.value})}
            />
          </div>
        </div>

        <button className="calc-btn" onClick={calculate}>Calculate</button>

        {result && (
          <div className="calc-result">
            <p>Recommended: <strong>{result.bags}</strong> bags</p>
            <p>Best option: <strong>{result.recommendation}</strong></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagingCalculator;