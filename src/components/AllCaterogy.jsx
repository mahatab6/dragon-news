import React, { use } from 'react';
import { NavLink } from 'react-router';

const caterogyPromise = fetch ('/categories.json').then(res => res.json())

const AllCaterogy = () => {
    const  category = use (caterogyPromise)
    
    return (
        <div>
            <h1>All Caterogy ({category.length})</h1>
            
           <div className='grid grid-cols-1 justify-items-center gap-4 mt-5'>
                {
                    category.map((category)=> (<NavLink to={`/category/${category.id}`} key={category.id} className={"bg-base-100 btn border-0 w-full hover:bg-base-300"}>{category.name}</NavLink>))
                }
           </div>
        </div>
    );
}

export default AllCaterogy;