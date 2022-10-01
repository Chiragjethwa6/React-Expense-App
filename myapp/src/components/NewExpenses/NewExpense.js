import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const expenseDataHandler = (entredExpenseData) => {
        const expenseData = {
            ...entredExpenseData,
            id : Math.random.toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    function formEditingHandler(){
        setIsEditing(true);
    }

    function stopEditingHandler(){
        setIsEditing(false);
    }
    
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={formEditingHandler}>Add New Expene</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={expenseDataHandler}/>}
        </div>
    )
}

export default NewExpense