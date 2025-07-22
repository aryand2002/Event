import axios from 'axios';

const ApiUrl = "http://localhost:8000/"

export const loginAPi = async (val) => {
  const response = await axios.post(`${ApiUrl}login/`, val);
  return response.data;
}

export const registerApi = async (val) => {
  const response = await axios.post(`${ApiUrl}register/`, val);
  return response.data;
}