import axios from "axios";

const instanceEndpoint = axios.create({
    baseURL: "http://localhost:5083/api/"
})

export const calculateFibonacci = (data) => instanceEndpoint.post("Fibonacci/calculate", data).then((res) => { return res }).catch(e => console.log(e))