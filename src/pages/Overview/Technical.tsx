import { Link } from 'react-router-dom';
import './Overview.css';

const Technical = () => {
  return (
    <div className="specs-page">
      <div className="specs-container">
        <div className="specs-header">
          <Link to="/about" className="back-link">← Back to Overview</Link>
          <h2>Technical Specifications</h2>
        </div>

        <div className="load-capacity-section">
          <h3>Load Capacity Chart</h3>
          <p className="section-subtitle">The Maximum Load Depends On The Size Of The Air Bag And The Gap Between The Cargos. The Table Shows The Load Of Various Sizes Of Air Bags Can Withstand In A Gap Respectively.</p>
          
          <div className="capacity-table-wrapper">
            <table className="capacity-table">
              <thead>
                <tr>
                  <th>Size(in cm)</th>
                  <th></th>
                  <th>90 X 120</th>
                  <th>90 X 150</th>
                  <th>90 X 180</th>
                  <th>90 X 210</th>
                  <th>120 X 120</th>
                  <th>120 X 180</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-header">10cm</td>
                  <td rowSpan={6} className="merged-cell">loads in tons with respect to gap</td>
                  <td>12 Ton</td>
                  <td>14 Ton</td>
                  <td>16 Ton</td>
                  <td>22 Ton</td>
                  <td>14 Ton</td>
                  <td>18 Ton</td>
                </tr>
                <tr>
                  <td className="row-header">15cm</td>
                  <td>7 Ton</td>
                  <td>8 Ton</td>
                  <td>10 Ton</td>
                  <td>15 Ton</td>
                  <td>10 Ton</td>
                  <td>12 Ton</td>
                </tr>
                <tr>
                  <td className="row-header">20cm</td>
                  <td>4 Ton</td>
                  <td>5 Ton</td>
                  <td>6 Ton</td>
                  <td>10 Ton</td>
                  <td>7 Ton</td>
                  <td>9 Ton</td>
                </tr>
                <tr>
                  <td className="row-header">30cm</td>
                  <td>2 Ton</td>
                  <td>2.5 Ton</td>
                  <td>3 Ton</td>
                  <td>7.5 Ton</td>
                  <td>5 Ton</td>
                  <td>6 Ton</td>
                </tr>
                <tr>
                  <td className="row-header">40cm</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>2.5 Ton</td>
                  <td>3 Ton</td>
                </tr>
                <tr>
                  <td className="row-header"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="row-header">Max Gap in cm</td>
                  <td></td>
                  <td>30 cm</td>
                  <td>35cm</td>
                  <td>45cm</td>
                  <td>55cm</td>
                  <td>60cm</td>
                  <td>65cm</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;