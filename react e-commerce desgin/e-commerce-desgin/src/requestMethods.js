import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWZhN2U2NGEzNzAzYTcyMDA3NDViNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDQ1MjU2NywiZXhwIjoxNjUwNzExNzY3fQ.OyM04oG24LhphA-NlAKdd2TtB35y25MmxBeG2dCvzqU";

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`bearer ${TOKEN}`}
})