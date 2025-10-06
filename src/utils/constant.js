export const PROFILE_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdp10ULpdkSWe1szCM5e70s2LK8j66DCTpQVWstkNmXEhyOfnhJT-f2UfyOigGfb5QBG0&usqp=CAU"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEYS
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEYS = import.meta.env.VITE_OPENAI_API_KEYS