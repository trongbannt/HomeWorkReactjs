import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-30c98.firebaseio.com/',
    timeout: 3000,
});

export default instance;