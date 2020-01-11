import axios from 'axios';

const Hz = axios.create({
    baseURL: 'https://m.lvyuetravel.com/api/travel/recommend/guides.json'
})

const get = async (data2, config = {}) => {
    let { data } = await Hz.get('', {
        ...config,
        params: data2,
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    })

    return data;
}

export default {
    get
}