import React from 'react'
import "./form.css";
import { useState } from 'react';

function Form() {
const [date, setDate] = useState();
const [time, setTime] = useState();
const [number, setNum] = useState("0");
const [selectOccasion, setSelectOccasion] = useState();

const handleSubmit = (e) => {
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  console.log(e.target[3].value);
e.preventDefault();

}

  return (
    <>
   
    <div className='div-container'>
      <form className='form-container' onSubmit={handleSubmit}>
      
<label htmlFor=''>Select Date:</label> &nbsp;
    <input type='date' 
   value={date} onChange={(e) => setDate(e.target.value)}  /> <br/><br/>
 

<label htmlFor=''>Select Time:</label> &nbsp;
<input type='time' min="12:00 pm" max="2:00 am" value={time} onChange={(e) => setTime(e.target.value)} /> <br/><br/>
  
 
<label htmlFor=''> Number of Guests:</label>
<input type='number' min="2" max="10" value={number} onChange={(e) => setNum(e.target.value)}/><br/><br/> 


<label htmlFor=''> Occasion:</label><br/>

<select value={selectOccasion} onChange={(e) => setSelectOccasion(e.target.value)}>

<option value="Anniversary">
Anniversary
</option>
<option value="Birthday">
Birthday
</option>

<option value="Others">
Others
</option>
</select>
 

 <br/><br/>
<input type='submit' className='btn2' value='Submit' />
   </form>
   
    </div>

    </>

  )
}

export default Form;