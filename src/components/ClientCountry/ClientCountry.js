import React, { useState, useEffect } from 'react';
import { getClientIP, getIPLocation } from '../../services/IPServices';

const UserCountry = () => {

    const [clientIP, setClientIP] = useState(null);
    const [ipLocation, setIPLocation] = useState('');

    useEffect(() => {
        const fetchClientIP = async () => {
            let address = await getClientIP();
            console.log(address);
            setClientIP(address);
        }
        fetchClientIP();
    }, [])

    useEffect(() => {
        const locateIP = async (ipAddress) => {
            let location = await getIPLocation(ipAddress);
            // console.log(location);
            // setIPLocation(location);
        }
        if(clientIP) {locateIP(clientIP)}
    }, [clientIP])

    return (
        <div>
            <h4>Your IP: {clientIP}</h4>
            <h6>You live in: {ipLocation}</h6>
        </div>
    )
}

export default UserCountry;