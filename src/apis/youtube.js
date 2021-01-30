import axios from 'axios';

const KEY = 'AIzaSyBCadBGvi84bu-JJZ92iR0599hsaQssEng'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        

    }
});

