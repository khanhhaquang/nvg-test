import axios from 'axios';

export const Get = (url) => axios.get(url, {});
export const Post = (url, data) => axios.post(url, data, {});
export const Put = (url, data) => axios.put(url, data, {});
export const Delete = (url) => axios.delete(url, {});
