import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://personali-tee.firebaseio.com'
});

export default instance;