import { useState } from "react";

import axios from "axios";

export default function IncomeForm() {
  const date = new Date ();
  date.setDate(date.getDate() + 3);

  const currentDate = date.toISOString().substr(0,10);

  const [formValue, setFormValue] = useState({
    date: currentDate,
    amount: 1500,
    note: "",
    category: "walk-in"
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('/api/incomes/', formValue)
    .then(res => {
      setFormValue(res.formValue)
    })
    .catch(err => console.log("Error triggerd! ", err));
  }

  const handleChange = (event) => {
    const formName = event.target.name;

    setFormValue(prev => ({
      ...prev,
      [formName]: event.target.value
    }));
  };

  return (
    <div className="income-form">
      <form>
        <label>
          Date: 
            <input
              type="date"
              name="date"
              value={formValue.date}
              onChange={handleChange}
            />
        </label>
        <label>
          Amount: 
          <input
            type="number"
            name="amount"
            value={formValue.amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <select value={formValue.category} name="category" onChange={handleChange}>
            <option value="uber-eats">Uber-Eats</option>
            <option value="ritual">Ritual</option>
            <option value="walk-in">Walk in</option>
            <option value="skipthedishes"> SkipTheDishes</option>
            <option value="doordash">DoorDash</option>
          </select>
        </label>
        <label>
          Note: 
          <input
            type="text"
            name="note"
            value={formValue.note}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}