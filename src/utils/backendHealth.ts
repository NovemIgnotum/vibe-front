import axios from "axios";

export const backendHealth = async (): Promise<boolean> => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/health`);
    return response.status === 200;
  } catch (error) {
    console.error("Backend not available", error);
    return false;
  }
};
