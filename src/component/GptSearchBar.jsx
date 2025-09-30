import React from 'react';
import BackgroundImg from "../assets/images/Background.jpg";
import { useSelector } from 'react-redux';
// import store from "../store/appstore"
import lang from '../utils/languageConstant';
function GptSearchBar() {
    const langKey = useSelector((store)=>store.config.lang);
    console.log("lang=>>>",lang);
    // console.log(lang);
    return (
        <section className='h-screen bg-cover bg-center -z-10 ' style={{backgroundImage: `url(${BackgroundImg})`}}>
            <div className='bg-black inset-0 absolute opacity-65 h-full'></div>
            <div className='pt-40 m-auto flex justify-center items-center  relative'>
                <form action="">
                    <input type="text" name="" id="" placeholder={lang[langKey].gptSearchPlaceholder} className='px-4 py-2 w-140 mx-4 bg-white border border-white rounded-lg' />
                    <button className='py-2 px-4 bg-blue-400 rounded-lg' type='button'>{lang[langKey].search}</button>
                </form>
            </div>
        </section>
    )
}

export default GptSearchBar