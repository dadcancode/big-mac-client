import { API_URL, ENDPOINTS } from "../config"

export const getClientIP = async () => {
    return fetch(`${API_URL}/${ENDPOINTS.index}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                return json
            })
}

export const getAllMacData = async => {
    return fetch(`${API_URL}/${ENDPOINTS.index}`)
            .then(resp => resp.json())
            .then(json => {
                return json.data
            })
}

export const getCountryMacData = async (country) => {
    return fetch(`${API_URL}/${ENDPOINTS.macData}/${country}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                return json
            })
}

export const getRandomCountryData = async (country) => {
    let macData = await getAllMacData();
    const chooseRandomProp = (object) => {
        let keys = Object.keys(object);
        return object[keys[Math.floor(Math.random() * keys.length)]]
    }

    let randomResult = chooseRandomProp(macData);

    while (randomResult.Country === country) {
        randomResult = chooseRandomProp(macData);
    }

    return randomResult;
    
}

export const calculateMacs = (dollarAmt, localPrice) => {
    let result = Math.floor(dollarAmt / localPrice);
    
    return result;
    
}

export const calculateRandomMacs = (dollarAmt, localLocalPrice, localDollarPrice, randDollarPrice) => {

    return Math.floor((dollarAmt / localLocalPrice) * (localDollarPrice / randDollarPrice))


}

export const exchangeAmout = (dollarAmt, localDollarPrice, randDollarPrice) => {
    
    return Math.floor(dollarAmt * (localDollarPrice / randDollarPrice))

}