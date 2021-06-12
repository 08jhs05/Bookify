import { Pie } from 'react-chartjs-2'
import { RGBPicker } from '../../helpers'

import Paper from '@material-ui/core/Paper';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Divider } from '@material-ui/core';

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

  return (
      <Paper className="paper_categories" elevation={2} style={{borderRadius:'20px', display:"flex", flexDirection:'column', justifyContent:"space-between"}}>
      <h3 style={{marginBottom: 0, marginTop: 0}}>Categories</h3>
      <Divider style={{margin: 0, height: '2px'}}/>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <div className={'regularFont'} style={{display:"flex", flexDirection:'column', alignItems:"center", justifyContent:"space-between"}}><KeyboardArrowUpIcon style={{width:'60px', height:'60px', color:'#303F9F'}}/>
        INCOMES
        </div>
        <Pie   
          data={{labels: incomesLabels
          ,datasets: incomesDatasets}}        
          width={240}
          height={220}
          options={{responsive: false,
            maintainAspectRatio: true}}
          />
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <div className={'regularFont'} style={{display:"flex", flexDirection:'column', alignItems:"center", justifyContent:"space-between"}}>EXPENSES<KeyboardArrowDownIcon style={{width:'60px', height:'60px', color:'#E91E63'}}/></div>
        <Pie
        data={{labels: expensesLabels
          ,datasets: expensesDatasets}}        
          width={240}
          height={220}
          options={{responsive: false, maintainAspectRatio: true }}
          />
      </div>
      </Paper>
  );
}