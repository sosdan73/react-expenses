import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [formVisible, setFormVisible] = useState(false)

    const toggleFormVisibility = () => {
        setFormVisible(previousState => {
            return !previousState
        })
    }

    const submitDispatcher = (data) => {
        const newExpanse = {
            ...data,
            id: Math.random().toString()
        }
        props.onNewExpenseSubmit(newExpanse);
        toggleFormVisibility();
    }

    let newExpenseContent = <button onClick={toggleFormVisibility}>Add New Expense</button>;
    if (formVisible) {
        newExpenseContent = (
            <ExpenseForm
                onNewExpenseSubmit={submitDispatcher}
                onNewExpenseCancel={toggleFormVisibility}
            />
        )
    }

    return (
        <div className="new-expense">{newExpenseContent}</div>
    )
}

export default NewExpense