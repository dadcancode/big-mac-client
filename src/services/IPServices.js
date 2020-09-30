import { API_URL, ENDPOINTS } from "../config"

export const getClientIP = async () => {
    return fetch(`${API_URL}/${ENDPOINTS.index}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                return json
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

export const calculateMacs = (dollarAmt, localPrice) => {
    if(dollarAmt < localPrice) {
        return 'Whoops, the Mac costs a bit more than that amount'
    } else {
        return Math.floor(dollarAmt / localPrice);
    }
}