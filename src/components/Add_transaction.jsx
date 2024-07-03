import React, { useContext, useState } from "react";
import { GlobalContext } from "../context_api/Globalcontext";
import '../App.css';

const Add_rec = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [empty,setempty]=useState({});
    const { dispatch } = useContext(GlobalContext);

    const addFunc = () => {
        if (name !== '' && amount !== '') {
            const newTransaction = {
                id: Math.floor(Math.random() * (100 - 10)) + 10,
                tname: name,
                type: type,
                amount: Number(amount)
            }
            // console.log(newTransaction);
            dispatch({
                type: "add",
                payload: newTransaction
            });
            const empty = () => {
                setName('');
                setAmount('');
                setempty({});
            }
            empty();
        } else if(name==='') {
            setempty({input1:true});          
        }else if(amount===''){
            setempty({input2:true});
        }
    }



    return (
        <div className="add_form">
            <div className="items">
                <input type="text" placeholder="Transaction Name" className={empty.input1?"error":""} value={name} onChange={e => setName(e.target.value)} />
                <select className="right_ele" value={type} onChange={e => setType(e.target.value)}>
                    <option value={"income"}>Income</option>
                    <option value={"expense"}>Expense</option>
                </select>
            </div>
            <div className="items"> <input type="number" placeholder="Amount" className={empty.input2?"error":""} value={amount} onChange={e => setAmount(e.target.value)} />
                <input className="right_ele" type="button" value={"Add"} onClick={addFunc} />
            </div>

        </div>
    );
}
export default Add_rec;