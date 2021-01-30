import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';


const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    //this is similar to componentDidMount() {
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        });
        // .data.items are visible in the api info when we console log a search
        setVideos(response.data.items) 
    };

    return [videos, search];
};

export default useVideos;