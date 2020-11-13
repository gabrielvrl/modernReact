import axios from 'axios';

const KEY = 'AIzaSyDVC-xTKA065vults9S8-SG18CkKFe-YzY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});