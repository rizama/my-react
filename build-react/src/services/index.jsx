import axios from 'axios'


const hostLocal = 'http://localhost:3004'
const hostOnline = 'https://jsonplaceholder.typicode.com'

const GET = (path, local) => {
    return new Promise( async (resolve, reject) => {
        try {
            let { data } = await axios.get(`${local ? hostLocal : hostOnline }/${path}`)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}

const API = {
    GET
}

export default API