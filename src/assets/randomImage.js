import api from '../services/api'

export default async function () {
  const response = await api.get('/warnings')
  if ( typeof response.data.warning !== "undefined" ) {
    return (response.data.warning)
  } else {
    return
  }
}