import axios from 'axios'

export function getRandomUser() {
  return axios
    .get('https://randomuser.me/api/')
    .then((response) => {
      return response.data.results
    })
}
