import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Input from './Input/Input';

const CreateWorkout = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [successfulUpload, setSuccessfulUpload] = useState(null);

    const [nameTouched, setNameTouched] = useState(false);
    const [repsTouched, setRepsTouched] = useState(false);

    const [nameClass, nameError] = nameTouched ? validateName(name) : ['', ''];
    const [repsClass, repsError] = repsTouched ? validateReps(reps) : ['', ''];

    const formIsValid =
    nameError === '' &&
    repsError === '' &&
    nameTouched &&
    repsTouched;
    
    const handleSubmit = async (e) => {
        e.preventDefault();


        const newExercise = {
          name,
          reps: Number(reps),
         
        };
        if (addExercise(newExercise,)) {
          setSuccessfulUpload(true);
        } else {
          setSuccessfulUpload(false);
        }
      };
      const handleReload = () => {
        window.location.reload(false);
      };
    
      if (successfulUpload) {
        return (
          <div>
            <h1>{name} was successfully uploaded!</h1>
            <div>
            <Link to="/training-app/training" onClick={handleReload}>
            Upload another exercise
          </Link>
          </div>
          </div>
        );
      }
    
      if (successfulUpload === false) {
        return (
          <div>
            <h1>Something went wrong...</h1>
          </div>
        );
      }

  return (
    <div>
    <h1>Create your new Workout</h1>
    <p>Please fill in the name of the exercises and how many repetitions you made</p>
    <form >
      <div>
        <Input
            label="Name"
            placeholder="Name of Exercise"
            handleOnChange={setName}
            handleOnBlur={setNameTouched}
            className={nameClass}
            error={nameError}
            />
        <Input
            label="Reps"
            placeholder="Repetitions"
            handleOnChange={setReps}
            handleOnBlur={setRepsTouched}
            className={repsClass}
            error={repsError}
            />
            </div>
      <button type="submit" disabled={!formIsValid} onClick={e=>handleSubmit(e)}>Save</button>
    </form>
    </div>
  );
};

const validateName = (name) => {
    return name ? ['valid', ''] : ['invalid', "Please enter the exercise name"];
  };
  
  const validateReps = (reps) => {
    return Number(reps) ? ['valid', ''] : ['invalid', "Please enter the number of repetitions"];
  };


  const addExercise= (newExercise) => {
    return "all done"
     //postExercise(newExercise);
  };

export default CreateWorkout;