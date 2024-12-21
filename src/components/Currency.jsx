import React from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios'

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_NEN0zMs36JmMgstrfyHHOFBsqsCFLCSvhsAVE2Ei"

function Currency() {

    const [amount, setAmount] = useState()
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(0)


    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2)
        setResult(result)
    }
  return (
    <div className='currency-div'>
        {/* Başlık */}
        <div style={{       
            fontFamily:"arial", 
            backgroundColor:"black",
            color:"white",
            width:"100%",
            textAlign:"center", 
            borderRadius:"20px"
            }}>
            <h3>Döviz Kuru Uygulaması</h3>
        </div>

        {/* inputs */}
        <div style={{
            marginTop:"25px"
        }}>
            <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='number' className='amount'/>
            <select 
            onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <FaRegArrowAltCircleRight style={{fontSize:'25px', marginRight:'10px', marginTop:"5px"}}/>

            <select 
            onChange={(e)=> setToCurrency(e.target.value)}
            className='to-currency-option'>
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>  
            </select>

            <input 
            value={result}
            onChange={(e)=> setResult(e.target.value)}
            type='number' className='result'/>
            </div>

        {/* Button */}
            <div>
                <button onClick={exchange}
                className='exchange-button'>Çevir</button>
            </div>
    </div>
  )
}

export default Currency