import './Expenses.css'
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({data}) => {
    const [selectedYear, setSelectedYear] = useState(2020)
    const expensesFiltered = data.filter(expense => expense.date.getFullYear() === +selectedYear)

    const handleFilterChange = event => {
        setSelectedYear(+event.target.value)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={selectedYear}
                onFilterChange={handleFilterChange}
            />
            <ExpensesChart expenses={expensesFiltered}/>
            <ExpensesList list={expensesFiltered}/>
        </Card>
    )
}

export default Expenses;