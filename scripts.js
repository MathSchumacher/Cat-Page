const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_u4qFKjKCpVr0pFEuuGAIEVVqoBq6RxND7nD5GAYDTvAT4zOGAZYMpml3TcKuaVKa';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const response = await fetch(BASE_URL, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data[0].url;
    } catch (e) {
        throw new Error('Failed to fetch cat image:', e);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    const errorMsg = document.getElementById('error-message');
    
    try {
        const catUrl = await getCats();
        catImg.src = catUrl;
        catImg.style.display = 'block';
        errorMsg.style.display = 'none';
    } catch (e) {
        catImg.style.display = 'none';
        errorMsg.textContent = `Error: ${e.message}`;
        errorMsg.style.display = 'block';
    }
};

catBtn.addEventListener('click', loadImg);
loadImg();
