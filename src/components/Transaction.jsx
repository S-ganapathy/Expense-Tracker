import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context_api/Globalcontext";
import '../App.css';

const Transaction = () => {

    // 
    const { transfer } = useContext(GlobalContext);
    const { dispatch } = useContext(GlobalContext);
    // 
    const remove = (id) => {
        dispatch({
            type:"delete",
            payload:id
        });
    }


    return (
        <div className="trans_box">

            {transfer.map((transaction) => (
                <div className="transaction_div" style={{ borderRight: `${transaction.type === "expense" ? "solid 4px red" : "solid 4px green"}` }} key={transaction.id}>
                    <div>{transaction.tname}</div>     <div> ₹ {transaction.amount}</div> <div className="delete" ><button onClick={() => remove(transaction.id)}>Delete</button></div>
                </div>
            ))}


        </div>
    );
}

export default Transaction;