import React, { useState, useEffect } from "react";
import Transactions from "./TransactionsList";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <Transactions transactions={filteredTransactions} />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
  
}

import React from 'react';
import TransactionList from './TransactionList';
class App extends React.Component {
    state = {
      transactions: []
    }
  
    handleDeleteTransaction = (id) => {
      const updatedTransactions = this.state.transactions.filter(transaction => transaction.id !== id);
      this.setState({ transactions: updatedTransactions });
    }
  
    render() {
      return (
        <div>
          <TransactionList transactions={this.state.transactions} onDeleteTransaction={this.handleDeleteTransaction} />
        </div>
      );
    }
  }

export default App;
