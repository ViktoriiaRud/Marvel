import {useHttp} from "../hook/http.hook";
const  useMarvelService = () => {

    const {loading, request, error, clearError} = useHttp();
 
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=09286f752621bf03d36f174971956fe2';



    const _baseOffset = 210; 
    
    // getResource = async (url) => {
    //     let res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // }


    const getAllCharacters = async(offset = _baseOffset) => {
        const results = await request(`${_apiBase}characters?limit=10&offset=${offset}&${_apiKey}`);
        return results.data.results.map(_transformCharacter);

    } 



    const getCharacter = async (id) => {
        const result = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(result.data.results[0]);
    } 


    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

  return {loading, error, clearError, getAllCharacters, getCharacter}

}

export default useMarvelService;


