import jwtAxios from "axios";

const jwtAuthAxios = jwtAxios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        'Content-Type': 'application/json'
    }
});

jwtAuthAxios.interceptors.request.use(
    function (config) {
        config.headers = {
            ...config.headers
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
);

jwtAuthAxios.interceptors.response.use(
    function (response) {
        if (response?.status === 401) {
            localStorage.removeItem('token')
            window.location.replace("/")
        }
        return Promise.resolve(response)
    },
    async function (err) {
        const originalRequest = err.config;
        // console.log('originalrequest', err?.response?.status, err?.response.data);
        if (err?.response?.status === 400 || err?.response?.status === 500) {
            // return Promise.reject(err?.response?.data)
        }
        else if (err?.response?.status === 401) {
            localStorage.removeItem('token')
            window.location.replace("/")
            console.log('response in interceptor line number 53');
        } else if (err?.response?.status === 403) {
            localStorage.removeItem('token')
            window.location.replace("/")
            console.log('response in interceptor line number 53');
        } else {
            console.log('response in interceptor line number 82');
            return Promise.reject(err);;
        }
    }
);

export const setAuthToken = (token) => {
    if (token) {
        jwtAuthAxios.defaults.headers.common['Authorization'] = token;
        sessionStorage.setItem('token', token);
    } else {
        delete jwtAuthAxios.defaults.headers.common['Authorization'];
        sessionStorage.removeItem('token');
    }
};

export const getAuthToken = () => {
    return sessionStorage.getItem("token");
};

export default jwtAuthAxios;