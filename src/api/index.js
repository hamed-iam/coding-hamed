import axios from 'axios';

const url = 'https://v2.jokeapi.dev/joke/Any';

export const fetchData = async () => {
  try {
    const { setup, delivery } = await axios.get(url);

    return { setup, delivery };
  } catch (error) {
    console.log(error);
  }
};
