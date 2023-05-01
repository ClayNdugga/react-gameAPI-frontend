import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '286957b11d4148b58e35f1fe5e883e62'
    }
})