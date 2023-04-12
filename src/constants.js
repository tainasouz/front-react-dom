
const prod = {
    url: 'https://api-filmes-hf8j.onrender.com/',
};
const dev = {
    url: 'http://localhost:3000/'
};
export const config = process.env.NODE_ENV === 'desenvolvimento' ? dev : prod;