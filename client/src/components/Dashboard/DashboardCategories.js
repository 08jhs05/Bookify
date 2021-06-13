import { Pie } from 'react-chartjs-2'
import { RGBPicker } from '../../helpers'

import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';

import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function DashboardCategories(props) {

  const rgbPicker = new RGBPicker;

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

  for(const income of props.data.incomes) {
    if(!incomesLabels.includes(income.category[0])) {
      incomesLabels.push(income.category[0]);
      incomesDataIndex[income.category[0]] = incomesDatasets[0].data.length;
      incomesDatasets[0].data.push(income.amount);
      incomesDatasets[0].backgroundColor.push(rgbPicker.getnextColor())
    } else {
      incomesDatasets[0].data[incomesDataIndex[income.category[0]]] = incomesDatasets[0].data[incomesDataIndex[income.category[0]]] + income.amount;
    }
  };

  for(const expenses of props.data.expenses) {
    let categoryname = expenses.category[0];
    if(expenses.category.length > 1) categoryname = `${expenses.category[0]} - ${expenses.category[1]}`
    if(!expensesLabels.includes(categoryname)) {
      expensesLabels.push(categoryname);
      expensesDataIndex[categoryname] = expensesDatasets[0].data.length;
      expensesDatasets[0].data.push(expenses.amount);
      expensesDatasets[0].backgroundColor.push(rgbPicker.getnextColor())
    } else {
      expensesDatasets[0].data[expensesDataIndex[categoryname]] = expensesDatasets[0].data[expensesDataIndex[categoryname]] + expenses.amount;
    }
  };
  //=======================

  const [value, setValue] = React.useState('Incomes');
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
            <FormControlLabel value="Incomes" control={<Radio />} label="Incomes" />
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