import React,{useState} from 'react';
import Filter from './Filter';
import Cardlist from './Cardlist';
import {jobs} from './data';


const App = () => {

    // for filter
    const [arrayInit,arrayNew] = useState([]);

    // for job list 
    const [job,setJobs] = useState(jobs);

    //when a skill is clicked
    
   
    const skillClick = (event) => {
        let name = event.target.getAttribute('name')
        if(arrayInit.includes(name) !== true){
            arrayNew(preValue=>{
            return [...preValue, name]  
            })
        }

        setJobs(preValue=>{
          return  preValue.filter(word=>{
            return  word.skills.includes(name)
            })
        })
    }
    
    // when a skill is clicked
    const filterJobs = () => {

    }

    // delete filter bar 
    const clearClick = () => {
        arrayNew([]);
        setJobs(jobs);
    }

    // updateFilter
     function updateFilter(event){
        let name = event.target.getAttribute('name');
        let arrayChanged = arrayInit.filter(value=>{
            return value!==name
        })
        arrayNew(prevValue=>{
          return  prevValue.filter(value=>{
              return value !== name
          })
        });

        setJobs(jobs.filter(j=>{
            return arrayChanged.every(e => {
           return j.skills.includes(e)
               })
           }))

           console.log(arrayChanged);
           console.log(arrayInit);
    }

       
      
    
   

    return(
        <div>
       <div className='image'></div>
       <Filter filtered={arrayInit}  clear={clearClick} filterChange={updateFilter}/>
       <Cardlist click={skillClick} filter={filterJobs} list={job}/>
        </div>
    )
}

export default App;