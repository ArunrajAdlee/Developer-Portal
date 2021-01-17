import { server } from './server';

export async function getUserInfo({ email, password }) {
  try {
    return await server.post(`/api/auth`, {
      email: email,
      password: password,
    });
  } catch (e) {
    console.log(e);
  }
}
