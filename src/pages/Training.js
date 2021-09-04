import React from "react";
import NavBar from '../components/navbar/NavBar';
import CreateWorkout from '../components/create workout/CreateWorkout';

function TrainingPage() {
    return (
        <div>
            <NavBar></NavBar>
            <CreateWorkout></CreateWorkout>
        </div>
        );
      }

export default TrainingPage;