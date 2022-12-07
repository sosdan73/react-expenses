import {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const handleTitle = e => {
        // setUserInput({...userInput, enteredTitle: e.target.value}) NOT LIKE THAT!!!
        setUserInput(prevState => {
            return {...prevState, enteredTitle: e.target.value}
        })
    }
    const handleAmount = e => {
        // setUserInput({...userInput, enteredAmount: e.target.value}) NOT LIKE THAT!!!
        setUserInput(prevState => {
            return {...prevState, enteredAmount: e.target.value}
        })
    }
    const handleDate = e => {
        // setUserInput({...userInput, enteredDate: e.target.value}) NOT LIKE THAT!!!
        setUserInput(prevState => {
            return {...prevState, enteredDate: e.target.value}
        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        const expensesData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onNewExpenseSubmit(expensesData)
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={handleTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enteredAmount}
                        onChange={handleAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={userInput.enteredDate}
                        onChange={handleDate}
                    />
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onNewExpenseCancel}>Cancel</button>
                    <button type="submit">Add expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm