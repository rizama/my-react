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

// PUT
const PUT = (path, local, id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.put(`${local ? hostLocal : hostOnline}/${path}/${id}`, data)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

// DELETE
const DELETE = (path, local, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await axios.delete(`${local ? hostLocal : hostOnline}/${path}/${id}`)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}


const API = {
    GET,
    POST,
    PUT,
    DELETE
}

export default API