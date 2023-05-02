import React, { useState } from "react";

function TransactionForm(props) {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      description: formData.description,
      category: formData.category,
      amount: Number(formData.amount)
    };
    props.addTransaction(newTransaction);
    setFormData({
      description: "",
      category: "",
      amount: ""
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TransactionForm;
