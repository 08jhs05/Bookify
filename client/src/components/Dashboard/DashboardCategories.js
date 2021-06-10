import { Pie } from 'react-chartjs-2'
import { RGBPicker } from '../../helpers'

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
    <section className="categories_dashboard">
      <h2>Categories</h2>
      <div>Incomes:</div>
      <Pie   
        data={{labels: incomesLabels
        ,datasets: incomesDatasets}}        
        width={300}
        height={300}
        options={{responsive: false}}
        />
      <div>Expenses:</div>
      <Pie
      data={{labels: expensesLabels
        ,datasets: expensesDatasets}}        
        width={300}
        height={300}
        options={{responsive: false, legend: { display: false }}}
        />
    </section>
  );
}