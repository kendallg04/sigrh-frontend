import { ENDPOINTS } from "../config/api";
import apiClient from "../config/axioHttp";

export const LoginPost = async (form) => {
    const response = await apiClient.post(ENDPOINTS.AUTH.LOGIN, form);
    return response.data;
}