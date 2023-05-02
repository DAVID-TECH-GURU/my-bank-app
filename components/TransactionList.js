import React from 'react';

class TransactionList extends React.Component {
  state = {
    sortBy: 'category'
  }

  handleSort = (sortBy) => {
    this.setState({ sortBy });
  }

  handleDelete = (id) => {
    this.props.onDeleteTransaction(id);
  }

  render() {
    const { transactions } = this.props;
    const { sortBy } = this.state;

    const sortedTransactions = transactions.sort((a, b) => {
      const keyA = a[sortBy].toLowerCase();
      const keyB = b[sortBy].toLowerCase();

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    return (
      <div>
        <button onClick={() => this.handleSort('category')}>
          Sort by Category
        </button>
        <button onClick={() => this.handleSort('description')}>
          Sort by Description
        </button>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td><button onClick={() => this.handleDelete(transaction.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TransactionList;
