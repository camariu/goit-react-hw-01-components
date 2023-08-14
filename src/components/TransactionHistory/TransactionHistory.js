import React from "react";
import "./TransactionHistory.css";
import PropTypes from 'prop-types';

export default function TransactionHistory({ transaction }) {
  return (
    <div className="position">
      <div>
        <ul className="type">
          <li>
            <p>TYPE</p>
          </li>
          <li>
            <p>AMOUNT</p>
          </li>
          <li>
            <p>CURRENCY</p>
          </li>
        </ul>
      </div>
      {transaction.map((transactions) => {
        return (
          <div key={transactions.id} >
            <ul   className="type-list">
              <li className="list">{transactions.type}</li>
              <li className="list">{transactions.amount}</li>
              <li className="list">{transactions.currency}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

TransactionHistory.propTypes ={
  transaction: PropTypes.array.isRequired,
}