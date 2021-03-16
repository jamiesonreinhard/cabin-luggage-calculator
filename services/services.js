import axios from 'axios';

const getItems = async () => {
  const result = await axios(
    'https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory'
  );
  return result;
}

export default getItems;