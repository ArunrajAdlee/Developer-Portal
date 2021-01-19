import { server } from './server';

export async function login({ email, password }) {
  try {
    return await server.post(`/api/auth`, {
      email: email,
      password: password,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getUserInformation() {
  try {
    return await server.get(`/api/auth`);
  } catch (e) {
    console.log(e);
  }
}
