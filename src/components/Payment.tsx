import { useState } from "react"
// import Cart from "./Cart";

const Payment = () => {
    const [gmail, setGmail] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
    <div>
      <h1>Make your payment</h1>
      <div>
        
        <input 
            type="text" 
            value={name} 
            placeholder="full name"
            onChange={(e) => setName(e.target.value)} />

        <input 
            type="gmail" 
            value={gmail} 
            placeholder="Gmail address"
            onChange={(e) => setGmail(e.target.value)} />

        <input 
            type="amount" 
            value={amount} 
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)} />

        <input 
            type="number" 
            value={phoneNumber} 
            placeholder="Phone number"
            onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
    </div>
  )
}

export default Payment
