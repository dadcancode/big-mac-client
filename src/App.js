import React, {useState, useEffect} from 'react';
import './App.css';
import ClientCountry from './components/ClientCountry/ClientCountry';
import LocalResults from './components/LocalResults/LocalResults';
import {getClientIP, getCountryMacData, calculateMacs} from './services/IPServices';

function App() {

  const [dollarAmt, setDollarAmt] = useState(0);

  const [clientIP, setClientIP] = useState(null);
  const [ipLocation, setIPLocation] = useState(null);
  const [macData, setMacData] = useState({});
  const [numOfMacs, setNumOfMacs] = useState(null);

  const handleSubmit = (event) => {
      event.preventDefault();
      setNumOfMacs(calculateMacs(dollarAmt, macData.Localprice));    
  }

  useEffect(() => {
      const fetchClientIP = async () => {
          let json = await getClientIP();
          console.log(json);
          setClientIP(json.ip);
          setIPLocation(json.location);
          setMacData(json.data);

      }
      fetchClientIP();
  }, [])

  useEffect(() => {
    const fetchCountryMacData = async (country) => {
      let json = await getCountryMacData(country);
      setMacData(json);
    }
    if(ipLocation) {
      fetchCountryMacData(ipLocation);
    }
  }, [ipLocation]);

  return (
    <div className="App">
      <ClientCountry dollarAmt={dollarAmt} setDollarAmt={setDollarAmt} clientIP={clientIP} ipLocation={ipLocation} handleSubmit={handleSubmit}/>
      <LocalResults numOfMacs={numOfMacs} ppp={macData.DollarPPP}/>
    </div>
  );
}

export default App;
