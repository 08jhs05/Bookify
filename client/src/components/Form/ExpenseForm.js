import axios from 'axios';
import { useState } from 'react';
import CategoryTags from './CategoryTags';

export default function Expense(props) {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  
  const currentDate = date.toISOString().substr(0,10);

  const [category, setCategory] = useState([]);

  const [formValue, setFormValue] = useState({
    depositDate: currentDate,
    amount: 100,
    notes: "bought on the fly because onions ran out",
    category: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeFormValues = {
      ...formValue,
      category
    }
    console.log("line 25 triggerd");
    return axios.put('/api/expenses', completeFormValues)
    .then(() => {
      console.log("submitted");
      setFormValue({ ...completeFormValues})
      setCategory([])
    })
    .catch(err => console.log("Error Triggered! \n", err));

  }

  const handleChange = (event) => {
    const name = event.target.name;
    setFormValue(prev => ({
      ...prev,
      [name] : event.target.value
    }))
  }

  return (
    <div className="expense-form">
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
          <CategoryTags 
            category={category} 
            setCategory={setCategory}
          />
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
      </form>
      <button type="submit" onClick={handleSubmit}> Submit </button>

    </div>
  );
}