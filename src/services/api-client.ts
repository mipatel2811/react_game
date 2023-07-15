import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: "6c3f241e2ef345a592900ce4bb98108b"
    }
})