import { server } from './server';

export async function login({ email, password }) {
  try {
    return await server.post(`/api/auth`, {
      email: email,
      password: password,
    });
  } catch (e) {
    return { error: e.response };
  }
}

export async function register({ email, password, name }) {
  try {
    return await server.post(`/api/users`, {
      email: email,
      password: password,
      name: name,
    });
  } catch (e) {
    return { error: e.response };
  }
}

export async function getUserInformation() {
  try {
    return await server.get(`/api/auth`);
  } catch (e) {
    return { error: e.response };
  }
}

export async function getMyProfileInfo() {
  try {
    return await server.get(`/api/profile/me`);
  } catch (e) {
    return { error: e.response };
  }
}

export async function getProfileInfoByUserId({ userId }) {
  try {
    return await server.get(`/api/profile/user/${userId}`);
  } catch (e) {
    return { error: e.response };
  }
}
