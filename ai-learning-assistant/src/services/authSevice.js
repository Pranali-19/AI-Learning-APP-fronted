import axiosIntance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const login = async (email , password) => {
    try {
        const response = await axiosIntance.post(API_PATHS.AUTH.LOGIN , {
            email ,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occured' };
    }
};

const register = async (username , email, password) => {
    try {
        const response = await axiosIntance.post(API_PATHS.AUTH.REGISTER , {
            username,
            email ,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occured' };
    }
};

const getProfile = async () => {
    try {
        const response = await axiosIntance.get(API_PATHS.AUTH.GET_PROFILE);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occured' };
    }
};

const updateProfile = async (userData) => {
    try {
        const response = await axiosIntance.put(API_PATHS.AUTH.UPDATE_PROFILE , userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occured' };
    }
};

const changePassword = async (passwords) => {
    try {
        const response = await axiosIntance.post(API_PATHS.AUTH.CHANGE_PASSWORD, passwords);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An unknown error occured' };
    }
};

const authService = {
    login,
    register,
    getProfile,
    updateProfile,
    changePassword,
};

export default authService;