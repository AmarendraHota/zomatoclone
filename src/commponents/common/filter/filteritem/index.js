import React from 'react';
import "./filteritem.css";

const FilterItem = ({filter}) => {
    return (
        <div className='filter-item'>
            <div className='filter-name'>{filter.title}</div>
        </div>
    )
}

export default FilterItem;