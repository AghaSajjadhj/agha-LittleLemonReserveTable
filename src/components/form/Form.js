import React from 'react'
import "./form.css";

function Form() {
const [date, setDate] = useState();
const [time, setTime] = useState();
const [num, setNum] = useState();
const [occation, setOccation] = useState();

  return (
    <>
   
    <div className='div-container'>
      <form className='form-container'>
      <button className='btn1' >Reserve a table</button> <br/><br/>

   
  <label htmlFor=''>Select Date:</label> &nbsp;
    <input type='date' name='date' value={date}/> <br/><br/>

<label htmlFor=''>Select Time:</label> &nbsp;
<input type='time' name='time' value={time}/> <br/><br/>

<label htmlFor=''> Number of Guests:</label>
<input type='number' name='number' value={num}/><br/><br/>


<label htmlFor=''> Occasion:</label><br/>

<select value={occation}>
<option>
Select an Option
</option>
<option>
Anniversary
</option>
<option>
Birthday
</option>
<option>
Surprise Party
</option>
<option>
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
