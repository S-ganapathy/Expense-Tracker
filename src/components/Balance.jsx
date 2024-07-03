import React,{useContext} from "react";
import { GlobalContext } from "../context_api/Globalcontext";

const Balance = ()=>{
    
    const {transfer} = useContext(GlobalContext);
    // console.log(transfer[0].tname);\
    let total=0;
    transfer.map((transaction)=>{
        transaction.type==="expense"? total-=transaction.amount:total+=transaction.amount;
    });

    return(
        <div>
        <h3>Current Balance :</h3>
        <h2>{total}</h2>
        </div>
    );
}

export default Balance;