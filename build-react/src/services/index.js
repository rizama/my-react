import axios from 'axios'
import { hostLocal, hostOnline } from './config'

// GET
const GET = (path, local) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await axios.get(`${local ? hostLocal : hostOnline}/${path}`)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

// POST
const POST = (path, local, data) => {
    return new Promise(async (resolve, reject) => {
        axios.post(`${local ? hostLocal : hostOnline}/${path}`, data)
            .then((res) => {
                resolve(res)
            }, (err) => {
                reject(err);
            })
    })
}


const API = {
    GET,
    POST
}

export default API