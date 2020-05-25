// Placeholder for backend Express MongoDB Extension work
const baseURL = 'http://localhost:3000/api/facts/';

export default{
    getFacts() {
        return fetch(baseURL)
           .then(res => res.json());
    }
}