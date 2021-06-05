import { useState } from 'react';

export default function Expense(props) {
  const { onSubmit } = props;
  const date = new Date();
  date.setDate(date.getDate() + 3);
  
  const currentDate = date.toISOString().substr(0,10);

  const [formValue, setFormValue] = useState({
    date: currentDate,
    amount: 100,
    note: "bought on the fly because onions ran out",
    category: "ingredients"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValue)

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
          <select value={formValue.category} name="category" onChange={handleChange}>
            <option value="ingredients">Ingredients</option>
            <option value="supplies">Supplies</option>
            <option value="wages">Wages</option>
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
        <button type="submit" onClick={handleSubmit}> Submit </button>
      </form>
    </div>
  );
}