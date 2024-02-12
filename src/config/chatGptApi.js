import axios from 'axios';
import {OPEN_AI_URL} from './baseUrl';

export const imageAPI = async (value, size, apiKey) => {
  return await axios
    .post(
      `${OPEN_AI_URL}images/generations`,
      {
        prompt: value,
        n: 5,
        size: size,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + apiKey,
        },
      },
    )
    .then(response => {
      // console.log('RESPONSE', response);
      var Images = response.data.data;
      return Images;
    })
    .catch(error => {
      console.log(error.response);
      return 'error';
    });
};

export const chatAPI = async (value, apikey) => {
  return await axios
    .post(
      `${OPEN_AI_URL}chat/completions`,
      {
        model: 'gpt-3.5-turbo',
        temperature: 0,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        messages: [{role: 'user', content: value}],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + apikey,
        },
      },
    )
    .then(response => {
      var res = response.data.choices[0].message.content;
      return res;
    })
    .catch(error => {
      console.log(error.response.data.error.code);
      const err = {
        code: error.response.data.error.code,
        val: 'error',
      };
      return err;
    });
};
