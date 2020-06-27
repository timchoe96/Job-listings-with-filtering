import React from 'react';

const Card = ({image,company,date,position,details,skills,sidebar,clicked,filteredList}) => {
 

    return(
        <div className={`Card ${sidebar}`}>
            <div className='leftCard'>
            {/* left image */}
           <img src={image} alt=''></img>
           {/* next to image */}
           <div className='imageNext'>
                <div className='date'>
                        <h5>{company}</h5>
                        {
                        date.map((recent,i)=>{
                        return <div key={i} className={`_${i}`}>{recent}</div>
                        })
                        }
                </div>
                {/* position type */}
                    <h3>{position}</h3>
                    {/* date posted and location */}
                    <div className='details'> 
                        {
                        details.map((detail,i)=>{
                        return <div key={i} className={`_${i}`}>{detail}</div>
                        })
                        }
                    </div>
           </div>
            </div>
            {/* skills */}
            <hr/>
            <div className='skills'>
           
            {
                skills.map((skill,i)=>{
                    return <div name={skill} onClick={clicked} className={`_${i}`} key={i}>{skill}</div>
                })
            }
            </div>
        </div>
    )
}

export default Card;