import Countries from './countries.json';
import searchResults from './searchResults.json';

export const getCountries = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(Countries), 500);
    })
}

export const getSearchResults = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(searchResults), 500);
    })
}
