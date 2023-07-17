import React from 'react';
import commonStyle from '@/app/style/common.module.css'
import Image from 'next/image';
const page = async({params}) => {
  const id=params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}`;
  // const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '660ad5c2e5mshf6e5c8bb255a8b4p17e6e1jsnb4754afab2ff',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url, options);
    const data = await res.json();
    const mainData = data[0].details;
    

    return (
      <div className={commonStyle.container}>
                <h2 className={commonStyle.movie_title}>   Netflix \ <span> {mainData.type} </span> </h2>
                <div className={commonStyle.card_section}>
                    <div>
                        <Image src={mainData.backgroundImage.url} alt={mainData.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{mainData.title}</h1>
                        <p>{mainData.synopsis}</p>
                    </div>
                </div>
            </div>

    );
};

export default page;