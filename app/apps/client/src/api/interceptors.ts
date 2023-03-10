import axios from 'axios';
import { urlAPI } from './api.constants';

export const getContentType = () => ({
   'Content-Type': 'application/json',
})

export const axiosClassic = axios.create({
   baseURL: "/api",
   headers: getContentType(),
});

const instance = axios.create({
   baseURL: '/api',
   headers: getContentType(),
});