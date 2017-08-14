import superagent from 'superagent'
import { API_HOST } from './config'

class Api {
  
  requestLogin = (email, password) => (
    superagent
  /* Need to .post their session token*/
    .send({ email, password })
  )
  
  requestLogout = (token) => (
    superagent
  /* Need to .delete their session token*/
    .set('Authorization', `token ${token}`)
  )

  requestSignup = (email, password) => (
    superagent
  /* Need to .post their user info*/
    .send({ email, password })
  )
 
 /*this is a keyword search */
  /*postSearch = (keyword) => (
    superagent
   Need to .post their search terms
    .get(`${API_HOST}/bites`)
    .send({keyword})
    .then(console.log(keyword, "keyword in api call"))
    ) */

  postAddress = (address) => (
    superagent
  /* Need to .post their search terms*/
    .post(`${API_HOST}/search`)
    .send({address})
    .then(console.log(address, "address in api call"))
    )
}

export default new Api();