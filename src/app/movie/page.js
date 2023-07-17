import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import commonStyle from '@/app/style/common.module.css'
const page =async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
    const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '660ad5c2e5mshf6e5c8bb255a8b4p17e6e1jsnb4754afab2ff',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res=await fetch(url,options);
const data=await res.json();
const mainData= data.titles;
console.log(data)
    return (
        <>
           <section className={commonStyle.movieSection}>
            <div className={commonStyle.container}>
            <h1>Series and Movies</h1>
           <div className={commonStyle.card_section}>
           {
              mainData.map((curEle)=>{
               return <MovieCard key={curEle.id}{...curEle}/>
              })
            }
           </div>
            </div>
           </section>
        </>
    );
};

export default page;