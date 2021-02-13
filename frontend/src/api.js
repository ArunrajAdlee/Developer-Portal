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

export async function getProfileInfoByUserId({ userID }) {
  try {
    return await server.get(`/api/profile/user/${userID}`);
  } catch (e) {
    return { error: e.response };
  }
}

export async function deleteProfileExperienceByID(experience_id) {
  try {
    return await server.delete(`/api/profile/experience/${experience_id}`);
  } catch (e) {
    return { error: e.response };
  }
}

export async function addProfileExperience(experience) {
  try {
    return await server.put(`/api/profile/experience/`, {
      ...experience,
    });
  } catch (e) {
    return { error: e.response };
  }
}
