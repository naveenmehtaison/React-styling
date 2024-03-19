import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import NegativeNumber from './NegativeNumber';

const CourseInput = props => {
  const closeOverlay = () => {
    setisvalid(true)
    console.log(j,j)

  };
  let [enteredValue, setEnteredValue] = useState('');
  let [enteredValue2, setEnteredValue2] = useState('')
  const [isvalid,setisvalid]=useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setisvalid(true)
    }
    else{
      setisvalid(false)
      return
    }

    setEnteredValue(event.target.value);
  };
  const goalInputChangeHandler2 = event => {
    if(event.target.value>0 && enteredValue.trim().length>0){
      setisvalid(true)
      setEnteredValue2(event.target.value);
    }
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    
    const age = document.getElementById('age')
 
      setisvalid(true)
      props.onAddGoal(enteredValue,enteredValue2);
      enteredValue=''
      enteredValue2=''


  };
  if(!isvalid){
    return <NegativeNumber onClose={closeOverlay}/>
  }
  else{
    return (
        <div>

          <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isvalid? 'invalid':''}`}>
              <label style={{color: !isvalid? 'red':'black'}}>Username</label>
              <input style={{borderColor: !isvalid? 'red':'black',background:!isvalid? 'selmon':'transparent'}} type="text" onChange={goalInputChangeHandler} />
              <label for='age' style={{color: !isvalid? 'red':'black'}}>Age(years)</label>
              <input id='age' style={{borderColor: !isvalid? 'red':'black',background:!isvalid? 'selmon':'transparent'}} type="number" onChange={goalInputChangeHandler2} />
            </div>
            <button style={{backgroundColor: !isvalid? 'lightcoral':'red'}}type="submit">Add User</button>
          </form>

        </div>


      );
  } 

};

export default CourseInput;
