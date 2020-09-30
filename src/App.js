import React, {useState, useEffect} from 'react';
import './App.css';
import ClientCountry from './components/ClientCountry/ClientCountry';
import LocalResults from './components/LocalResults/LocalResults';
import RandomResults from './components/RandomResults/RandomResults';
import {getClientIP, getCountryMacData, calculateMacs, getRandomCountryData} from './services/IPServices';

function App() {

  const [dollarAmt, setDollarAmt] = useState(0);

  const [clientIP, setClientIP] = useState(null);
  const [ipLocation, setIPLocation] = useState(null);
  const [macData, setMacData] = useState({});
  const [randMacData, setRandMacData] = useState({});



  const handleSubmit = async (event) => {
      event.preventDefault();
      let randCountry = await getRandomCountryData(ipLocation);
      setRandMacData(randCountry);
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
    <div className="App container-fluid">
      <ClientCountry dollarAmt={dollarAmt} setDollarAmt={setDollarAmt} clientIP={clientIP} ipLocation={ipLocation} handleSubmit={handleSubmit}/>
      <LocalResults macData={macData} randCountry={randMacData} dollarAmt={dollarAmt} ppp={macData.DollarPPP}/>
      <RandomResults randCountry={randMacData} dollarAmt={dollarAmt} localDollarprice={macData.Dollarprice} localLocalPrice={macData.Localprice}/>
    </div>
  );
}

export default App;
