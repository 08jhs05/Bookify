import { Bar, Line, Pie } from 'react-chartjs-2'
import React from 'react'



export default function ExpenseGraph(props) {
  
console.log('======================')
console.log(props.daysAgo)
  
  return (
    <section className="incomeExpenseGraph">
      <div>
        I am graph component.
      </div>
    </section>
  );
}