import React, { useState } from 'react';

export default function BmiCalculator() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const calcBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBmi = Math.round(bmiValue * 100) / 100;
    console.log(roundedBmi);

    if (roundedBmi < 16) {
      window.alert("Hi..." + name + ", You are underweight");
    } else if (roundedBmi >= 16 && roundedBmi < 17) {
      window.alert("Hi..." + name + ", You are very thin");
    } else if (roundedBmi >= 17 && roundedBmi < 18.5) {
      window.alert("Hi..." + name + ", You are thin");
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      window.alert("Hi..." + name + ", You have a normal BMI");
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      window.alert("Hi..." + name + ", You are overweight");
    } else if (roundedBmi >= 30 && roundedBmi < 35) {
      window.alert("Hi..." + name + ", You are obese (Class I)");
    } else if (roundedBmi >= 35 && roundedBmi < 40) {
      window.alert("Hi..." + name + ", You are obese (Class II)");
    } else {
      window.alert("Hi..." + name + ", You are obese (Class III)");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calcBmi();
  }

  return (
    <div className="bmi-calculator">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name : </label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label htmlFor="height">Height (cm) : </label>
        <input type="number" name="height" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} /><br />
        <label htmlFor="weight">Weight (kg) : </label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} /><br /><br />
        <input type="submit" value="Calculate BMI" />
      </form>
    </div>
  );
}