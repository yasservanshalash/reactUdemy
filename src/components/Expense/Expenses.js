import { useState } from "react";
import ExpenseItem  from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card"

import "./Expenses.css"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>  
        {
        props.data.map((item) => 
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
        }
        </Card>
        </div>
    )
}


export default Expenses;