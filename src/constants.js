
const prod = {
    url: {
        API_URL: 'https://api-filmes-hf8j.onrender.com/',
    }
};
const dev = {
    url: {
        API_URL: 'http://localhost:3000/'
    }
};
export const config = process.env.NODE_ENV === 'desenvolvimento' ? dev : prod;