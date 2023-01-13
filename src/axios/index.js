import axios from 'axios'

export default axios.create({
    baseURL: 'https://us-central1-saif-d8a42.cloudfunctions.net/app',
})
