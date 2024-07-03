import React from "react";
import '../App.css';
import { useContext } from "react";
import { GlobalContext } from "../context_api/Globalcontext";

const Income_expense = () => {

    const dec_inc={
        color:"green",
        fontWeight:"Bold"
    }
    const dec_exp={
        color:"red",
        fontWeight:"Bold"
    }

    // calculate the income and expense
    const {transfer}=useContext(GlobalContext);

    let income=0;
    let expense=0;

    transfer.map((transaction)=>{
        transaction.type==="expense"?expense+=transaction.amount:income+=transaction.amount;
    });


    return (
        <div className="inc_exp">
            <div className="income" style={dec_inc}>
                <h4>Income</h4>
                <h3>{income}</h3>
            </div>

            <div className="expense" style={dec_exp}>
            <h4>Expense</h4>
            <h3>{expense}</h3>
            </div>
        </div>
    );
}


export default Income_expense;