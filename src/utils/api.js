import 'isomorphic-fetch'

const API_ENDPOINT = 'https://dapp-demo.coinjina.com'

function tokenSupply(user) {
  const data = { user_id: user }
  return request('/token/supply', { data, method: 'POST' })
}

function collect(user) {
  const data = { user_id: user }
  return request('/token/collect', { data, method: 'POST' })
}

function request(url, payload = {}) {
  // Clear any possible Vue observer
  let { headers = {}, data, body, method, params } = JSON.parse(JSON.stringify(payload))

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }
  if (data) {
    body = JSON.stringify(data)
  }
  if (!method) {
    method = body ? 'POST' : 'GET'
  }
  const query = []
  if (params) {
    Object.keys(params).forEach(k => {
      if (params[k] === true) {
        params[k] = 1
      }
      if (params[k] === false) {
        params[k] = 0
      }
      if (params[k] !== null) {
        query.push(`${k}=${encodeURIComponent(params[k])}`)
      }
    })
  }
  if (query.length) {
    url += (url.indexOf('?') !== -1 ? '&' : '?') + query.join('&')
  }

  function parseBody(response) {
    const type = response.headers.get('content-type')
    if (type.indexOf('json') !== -1) {
      return response.json()
    } else {
      return response.text()
    }
  }

  return fetch(API_ENDPOINT + url, { method, headers, body, credentials: 'same-origin' })
    .then(parseBody)
    .then(data => ({ data }))
    .catch(e => {
      throw e
    })
}

export default {
  tokenSupply,
  collect,
}