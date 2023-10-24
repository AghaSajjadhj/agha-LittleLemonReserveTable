import React from 'react'
import "./form.css";
import { useState } from 'react';

function Form() {
const [date, setDate] = useState();
const [time, setTime] = useState();
const [num, setNum] = useState();
const [select_Occasion, setSelectOccasion] = useState("Anniversary");
const handlesubmission = (e) => {
e.preventDefault();
}

  return (
    <>
   
    <div className='div-container'>
      <form className='form-container' onSubmit={handlesubmission}>
      

   
  <label htmlFor=''>Select Date:</label> &nbsp;
    <input type='date' value='date' onChange={(e) => setDate(e.target.value)} /> <br/><br/>

<label htmlFor=''>Select Time:</label> &nbsp;
<input type='time' value='time' onChange={(e) => setTime(e.target.value)} /> <br/><br/>

<label htmlFor=''> Number of Guests:</label>
<input type='number' value='number' onChange={(e) => setNum(e.target.value)}/><br/><br/>


<label htmlFor=''> Occasion:</label><br/>

<select value="select_Occasion" onChange={(e) => setSelectOccasion(e.target.value)}>

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
 

<label htmlFor='' type="text"/> <br/><br/>
<button className='btn2'>Submit</button>
   </form>
   
    </div>

    </>

  )
}

export default Form;