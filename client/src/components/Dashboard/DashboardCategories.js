// Import react and external library
import { useState } from 'react';
import { Pie } from 'react-chartjs-2'

// Import helper functions
import { RGBPicker } from '../../helpers'

// Import Material-UI
import { Divider, Radio, RadioGroup, FormControlLabel, Paper } from '@material-ui/core';

export default function DashboardCategories(props) {
  const {incomes, expenses} = props.data;
  const rgbPicker = new RGBPicker();

  //make props data usable for pie chart
  const incomesLabels = [];
  const incomesDataIndex = {};
  const incomesDatasets = [{label: "Income categories",
                            data:[],
                          backgroundColor: [] }];

  const expensesLabels = [];
  const expensesDataIndex = {};
  const expensesDatasets = [{label: "Expense categories",
                              data:[],
                            backgroundColor: [] }];

  for(const income of incomes) {
    if(!incomesLabels.includes(income.category[0])) {
      incomesLabels.push(income.category[0]);
      incomesDataIndex[income.category[0]] = incomesDatasets[0].data.length;
      incomesDatasets[0].data.push(income.amount);
      incomesDatasets[0].backgroundColor.push(rgbPicker.getnextColor())
    } else {
      incomesDatasets[0].data[incomesDataIndex[income.category[0]]] = incomesDatasets[0].data[incomesDataIndex[income.category[0]]] + income.amount;
    }
  };

  for(const expense of expenses) {
    let categoryname = expense.category[0];
    if(expense.category.length > 1) categoryname = `${expense.category[0]} - ${expense.category[1]}`
    if(!expensesLabels.includes(categoryname)) {
      expensesLabels.push(categoryname);
      expensesDataIndex[categoryname] = expensesDatasets[0].data.length;
      expensesDatasets[0].data.push(expense.amount);
      expensesDatasets[0].backgroundColor.push(rgbPicker.getnextColor())
    } else {
      expensesDatasets[0].data[expensesDataIndex[categoryname]] = expensesDatasets[0].data[expensesDataIndex[categoryname]] + expense.amount;
    }
  };

  const [value, setValue] = useState('Incomes');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <Paper className="paper_categories" elevation={2} style={{borderRadius:'20px'}}>
      <h1 style={{marginBottom: '20px', marginTop: 0, fontSize:'28px'}}>Categories</h1>
      <Divider style={{marginBottom: '24px', height: '2px'}}/>
      <div className="pie_container" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
          <RadioGroup aria-label="Show categories of:" name="categories_radio" value={value} onChange={handleChange}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", marginBottom:"20px"}}>
            <FormControlLabel value="Incomes" control={<Radio />} label="Incomes"style={{marginRight:'40px'}} />
            <FormControlLabel value="Expenses" control={<Radio />} label="Expenses" />
            </div>
          </RadioGroup>
      { value === 'Incomes' ? <div className="pie_div" style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Pie   
          data={{labels: incomesLabels
          ,datasets: incomesDatasets}}        
          width={300}
          height={300}
          options={{responsive: true,
            maintainAspectRatio: true}}
          />
      </div> : 
      <div className="pie_div" style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Pie
        data={{labels: expensesLabels
          ,datasets: expensesDatasets}}        
          width={300}
          height={300}
          options={{responsive: true, maintainAspectRatio: true }}
          />
        </div>}
      </div>
      </Paper>
  );
}