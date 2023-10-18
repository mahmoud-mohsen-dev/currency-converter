import './App.css';
import React from 'react'


const currency = 
  {
    USD: 1,
    EGP: 30.9,
    EUR: 0.95,
    GBP: 0.82
  }

Object.keys(currency)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      amount: '',
      convertFrom: '',
      convertTo: '',
    }
  }

  calc = (a, b, amount) =>{
    let total
    if (a === 'USD') {
      total = amount * currency[b] 
    } else if (b === 'USD'){
      total = amount / currency[a]
    } else {
      amount = amount / currency[a]
      total = amount * currency[b]
    }
    total = total.toFixed(2)
    console.log(total)
    return total
  }
  
  render() {
    return(
      <div className="app">
        <div className="calculator">
          <h3>Currency Exchange Calculator</h3>
          <div className="inputs">
            <div className='input-box'>
              <div className="select-box">
                <label>select Currency to convert From</label>
                <select onChange={(e) => this.setState({convertFrom: e.target.value})}>
                  <option disabled={this.state.convertFrom !== ''}>Select Currency</option>
                  <option>EGP</option>
                  <option>EUR</option>
                  <option>USD</option>
                  <option>GBP</option>
                </select>
              </div>              
              <div>
                <label>Enter Amount</label>
                <input type='number' placeholder='0' min={0} onChange={(e) => {
                  this.setState({amount: e.target.value})
                }}/>
              </div>

              <div className="select-box">
                <label>select Currency to convert to</label>
                <select onChange={(e) => this.setState({convertTo: e.target.value})}>
                  <option disabled={this.state.convertTo !== ''}> Select Currency</option>
                  <option>EGP</option>
                  <option>EUR</option>
                  <option>USD</option>
                  <option>GBP</option>
                </select>
              </div> 
              <button type='submit' onClick={()=> {
                this.setState({result: this.calc(this.state.convertFrom, this.state.convertTo, this.state.amount)}) 
              }}>Convert</button>
              <div className='result'>
                <p>Result : {this.state.result !== '' && !isNaN(this.state.result) && this.state.convertFrom !== '' && this.state.convertTo !== ''? `${this.state.amount} ${this.state.convertFrom} to ${this.state.convertTo} is (${this.state.result}) ${this.state.convertTo}` : ''}</p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    )
  }
}

export default App;
