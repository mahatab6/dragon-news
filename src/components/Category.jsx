import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newscard from './Newscard';

const Category = () => {
    const { id } = useParams();
    const data = useLoaderData ();

    const [newsData, setNewsData] = useState ([]);

    useEffect(()=>{


        if(id == '0'){
            setNewsData(data)
            return;
        }
        else if (id == '1'){
            const filterNews = data.filter((news)=>news.others.is_today_pick == true);
            setNewsData(filterNews)
        }
        else{
            const filterNews = data.filter((news)=>news.category_id == id);
            setNewsData(filterNews)
        }

    },[data, id])

    console.log(newsData)
    return (
        <div>
            <h1>defualt category {newsData.length} </h1>

          <div className='p-10'>
                {
                    newsData.map((newsData)=> <Newscard key={newsData.id} newsData = {newsData}></Newscard> )
                }
          </div>
        </div>
    );
};

export default Category;