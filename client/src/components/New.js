//import components
import ExpenseForm from "./Form/ExpenseForm"
import IncomeForm from "./Form/IncomeForm"

export default function New() {
  return (
    <section className="input-form">
      <ExpenseForm />
      <IncomeForm />
    </section>
  );
}