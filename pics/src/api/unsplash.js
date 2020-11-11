import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uuLxk0rFuZGHeoL3IUogOhfDhbxfMY-_uPd2z0LCIKs'
  }
});