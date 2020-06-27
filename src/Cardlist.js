import React from 'react';
import Card from './Card';

const Cardlist = ({click,list,filter}) => {
    return(
        <div className='cardList'>
        {
           list.map((listItem,i) => {
               const {image,company,date,position,details,skills,sidebar} = listItem;
               return <Card 
                            clicked={click}
                            filteredList={filter}
                            key={i}
                            image={image} 
                            company={company} 
                            date={date} 
                            position={position} 
                            details={details} 
                            sidebar={sidebar}
                            skills={skills}/>
                            
           }) 
        
        }
        </div>
    )
}

export default Cardlist;