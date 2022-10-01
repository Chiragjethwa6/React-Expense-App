import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmout, setEnteredAmout] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setuserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmout : '',
    //     enteredDate : ''
    // })
    

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })
        // setuserInput((prevState) => {
        //     return {...prevState, enteredTitle : event.target.value };
        // })
    }

    const amoutChangehandler = (event) => {
        setEnteredAmout(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     enteredAmout : event.target.value
        // })
        // setuserInput((prevState) => {
        //     return {...prevState, enteredAmout : event.target.value };
        // })
    }

    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })
        // setuserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value };
        // })
    }

    const submitFormhandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmout,
            date : new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmout('');
        setEnteredDate('');
    }

    

    return (
        <form onSubmit={submitFormhandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type ='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type ='number' value={enteredAmout} onChange={amoutChangehandler} min = "0.01" step = "0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type ='date' value={enteredDate} onChange={dateChangehandler} min = "2019-01-01" max = "2022-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm