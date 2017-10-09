/* If the useMockApi query parameter is set to true, use the json-schema mock data, otherwise use production data 
 set in the express set up */

const getBaseUrl = () => {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
};

// Returns true if name is 'useMockApi', null if not, empty string if set to false
//TODO: Find a way to rewrite this pos. Use jQuery?
const getQueryStringParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export default getBaseUrl;
