import { API_URL, IPV_ENDPOINTS, IPV_URL } from "../config"

export const getClientIP = async () => {
    return fetch(API_URL)
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                return json
            })
}

export const getIPLocation = async (ipAddress) => {
    return fetch(`${IPV_URL}/${ipAddress}/${IPV_ENDPOINTS.country_name}`)
        .then(resp => resp.json())
        .then(json => {
            return json.data.country_name
        })

}