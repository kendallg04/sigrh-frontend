import { API_BASE } from "./ruta";
import axios from 'axios';

const apiClient = axios.create({
    baseURL: API_BASE.URL.DEV,
    headers: { "Content-Type": "application/json" }
});

apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

apiClient.interceptors.response.use(
    response => response,
    error => {
        const customError = new Error("Ocurrió un error inesperado");
        if (error.response) {
            customError.message = error.response.data?.message || "Error del servidor";
            customError.status = error.response.status;
            customError.data = error.response.data;
        } else if (error.request) {
            customError.message = "No se recibió respuesta del servidor";
            customError.status = 0;
        } else {
            customError.message = error.message || "Error al configurar la petición";
        }

        customError.originalError = error;

        return Promise.reject(customError);
    }
);

export default apiClient;
