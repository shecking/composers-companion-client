let apiUrl
const apiUrls = {
  production: 'https://aqueous-earth-22729.herokuapp.com',
  // old production URL: https://aqueous-atoll-85096.herokuapp.com
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
