import axios from "axios";

const axiosInstance = axios.create({
  method: "GET",
});

export const request = async ({ url }) => {
  const options = {
    url,
  };

  try {
    const result = await axiosInstance(options);

    return result.data;
  } catch (error) {
    throw error;
  }
};
