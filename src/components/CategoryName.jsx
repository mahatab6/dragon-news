import React from 'react';

const CategoryName = ({name}) => {
    const {names} = (name);
        return (
        <div>
            <h1>{names}</h1>
        </div>
    );
};

export default CategoryName;