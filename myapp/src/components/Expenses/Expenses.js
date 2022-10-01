
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    } 

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onGetFilterYear={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
                {/* <ExpenseItem 
                    title = {props.expenses[0].title}
                    amount = {props.expenses[0].amount}
                    date = {props.expenses[0].date}
                />
                <ExpenseItem 
                    title = {props.expenses[1].title}
                    amount = {props.expenses[1].amount}
                    date = {props.expenses[1].date}
                />
                <ExpenseItem 
                    title = {props.expenses[2].title}
                    amount = {props.expenses[2].amount}
                    date = {props.expenses[2].date}
                /> */}
            </Card>
        </div>
    )
}

export default Expenses;

