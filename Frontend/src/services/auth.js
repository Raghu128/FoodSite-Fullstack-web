import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error signIn:');
    throw error;
  }
};
