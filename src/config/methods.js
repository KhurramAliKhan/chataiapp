import {BASE_URL} from './baseUrl';

export const POST_API = async (body, api, token) => {
  const res = await fetch(BASE_URL + api, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(body),
  });
  const result = await res.json();
  return result;
};

export const GET_API = async (api, token) => {
  const res = await fetch(BASE_URL + api, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  const result = await res.json();
  return result;
};

export const DELETE_API = async (api, token) => {
  const res = await fetch(BASE_URL + api, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  const result = await res.json();
  return result;
};
