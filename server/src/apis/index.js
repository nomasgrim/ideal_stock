const { requestServiceGet } = require('./requestPromises')
const token = 'Tpk_0c6f6fa98feb4d27a7049bbd4915a0dc' // test publish token
/**
 * @function
 * @param {string} data - number of users to request
 * @returns {Promise} Promise that will make an API request for an array of users
 */
function getUsers (data) {
  return requestServiceGet({
    uri: `users?quantity=${data}`,
    baseUrl: 'https://finch.bubinga.co/api/',
    json: true
  })
}

function getStock (data) {
  return requestServiceGet({
    uri: `${data}/quote?token=${token}`,
    baseUrl: 'https://sandbox.iexapis.com/stable/stock/',
    json: true
  })
}

module.exports = {
  getUsers, getStock
}
