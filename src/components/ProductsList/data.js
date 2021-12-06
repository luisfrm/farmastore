import axios from 'axios'

export const data = async() => {
  await axios.get(`http://localhost:5050/products`)
    .then(({data}) => {
      return data;
    })
}

