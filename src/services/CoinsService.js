import axios from "axios";

const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const getAll = async () => {
    const request = axios.get( baseUrl )
    const response = await request
    return response.data
}

const actions = { getAll }

export default actions