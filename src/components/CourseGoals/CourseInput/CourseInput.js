import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid,setisvalid]=useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setisvalid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length==0){
      setisvalid(false)
      return
    }
    else{
      setisvalid(true)
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isvalid? 'invalid':''}`}>
        <label style={{color: !isvalid? 'red':'black'}}>Course Goal</label>
        <input style={{borderColor: !isvalid? 'red':'black',background:!isvalid? 'selmon':'transparent'}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <button style={{backgroundColor: !isvalid? 'lightcoral':'red'}}type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
