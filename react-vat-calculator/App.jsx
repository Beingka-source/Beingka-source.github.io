import { useState } from 'react';
import './App.css';

function App() {
  const [vat, setVat] = useState(0);
  const [dis, setDis] = useState(0);
  const [price, setPrice] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);

  function handlePriceChange(e) {
    let p = parseFloat(e.target.value);
    // let v = (p - dis) * 0.07;
    // console.log(v.toFixed(2));
    // setVat(v.toFixed(2));
    setPrice(p);
    calculateGrossPrice(p, dis);
  }

  function handleDiscountChange(e) {
    let d = parseFloat(e.target.value);
    setDis(d);
    calculateGrossPrice(price, d);
  }

  function calculateGrossPrice(price, dis) {
    let gross = price - dis;
    let v = (gross * 0.07).toFixed(2);
    setGrossPrice(gross.toFixed(2));
    setVat(v);
  }

  return (
    <>
      <p style={{fontSize: '30pt'}}>Price:
        <input type="number"
        style={{fontSize: '30pt'}}
        onChange={handlePriceChange}/>
      </p>
      <p style={{fontSize: '30pt'}}>Discount:
        <input type="number"
        style={{fontSize: '30pt'}}
        onChange={handleDiscountChange}/>
      </p>
      <h2>Gross Price = {grossPrice}</h2>
      <h2>Vat = {vat}</h2>
      <div className="card">
      </div>
    </>
  );
}

export default App;

