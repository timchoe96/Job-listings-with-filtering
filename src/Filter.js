import React from 'react';
import remove from './images/icon-remove.svg';

const Filter = ({filtered,clear,filterChange}) => {
    if(filtered.length > 0){
        return(
            <div className='filter'>
                <div className='filterObjects'>
                    {
                        filtered.map((skill,i) => {
                        return (
                        <div key={i+1} className='remove'> 
                        <div key={i} className='tiny'>{skill}</div>
                        <img onClick={filterChange} key={i+2} src={remove} className='ex' alt='' name={skill}/>
                        </div>
                        )
                        })
                    }
                </div>
                <div onClick={clear} className='clear'>
                    Clear
                </div>
            </div>
        )
    }else{
        return (
            <div>

            </div>
        )
    }
}

export default Filter;