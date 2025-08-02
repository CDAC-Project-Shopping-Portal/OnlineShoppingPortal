import axios from 'axios'
// import { config } from '../config'
import { config } from '../../config'

export async function registerUser(
  firstName,
  lastName,
  email,
  phone,
  password
) {
  try {
    // create the required url
    const url = `${config.serverURL}/user/register`

    // create the request body
    const body = {
      firstName,
      lastName,
      email,
      phone,
      password,
    }

    // send the request and get the response from the server
    const response = await axios.post(url, body)

    if (response.status == 200) {
      // read the json body from response
      return response.data
    } else {
      // response is not success
      return null
    }
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function loginUser(email, password) {
  try {
    // create url
    const url = `${config.serverURL}/user/login`

    // create a body
    const body = {
      email,
      password,
    }

    // call Post API
    const response = await axios.post(url, body)

    // check if response is OK
    if (response.status == 200) {
      // send the response body
      return response.data
    } else {
      // send null result
      return null
    }
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}
