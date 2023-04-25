import { useState } from "react"
import React  from 'react'

const Calorie = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [calories, setCalories] = useState(0);
  
    function calculateCalories() {
      const cal = gender === 'male' ? 66.5 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age)) : gender === 'others' ? 56.5 + (12.397 * Number(weight)) + (3.799 * Number(height)) - (3.677 * Number(age)) : 447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age));
      const tdee = activityLevel === 'sedentary' ? cal * 1.05 : activityLevel === 'lightlyActive' ? cal * 1.16 : activityLevel === 'moderatelyActive' ? cal * 1.37 : activityLevel === 'veryActive' ? cal * 1.55 : cal * 1.79;
      setCalories(tdee);
    }
  
    return (
      <div className="calorie-app">
        <h1 className='heading-calc'>Calorie Calculator</h1>
        <div>
          <label>Age:</label>
          <input type="number" placeholder='age in years' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Weight:</label>
          <input type="number" placeholder='weight in kg' value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Height:</label>
          <input type="number" placeholder='height in cm' value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label>Activity Level:</label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </div>
        <button onClick={calculateCalories}>Calculate</button>
        <div>
          <h2>{calories.toFixed(2)} calories</h2>
          <h3>NOTE :- </h3>
          <p>These are rough figures and matter body to body and are influenced by muscle mass , body fat percent , experience in training etc.</p>
        </div>
      </div>
    );
}

export default Calorie