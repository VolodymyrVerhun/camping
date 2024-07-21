import axios from "axios";

export const getCamp = async () => {
  const { data } = await axios.get(
    "https://6699481a2069c438cd71db7e.mockapi.io/camp"
  );

  return data;
};
