import React from "react";

const Table = () => {
  return (
    <>
      <table cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>Tran ID</th>
            <th>Date</th>
            <th>Narration</th>
            <th>Tran Ref</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
      </table>

      <p className="transaction-date">Mar 26, 2021</p>
      <table>
        <tbody>
          <tr>
            <td>5421431</td>
            <td>25/01/2021</td>
            <td>Interest Payment</td>
            <td>43578297854906578467</td>
            <td>CR</td>
            <td>NGN642,000</td>
          </tr>
          <tr>
            <td>5421431</td>
            <td>25/01/2021</td>
            <td>Interest Payment</td>
            <td>43578297854906578467</td>
            <td>CR</td>
            <td>NGN642,000</td>
          </tr>
          <tr>
            <td>5421431</td>
            <td>25/01/2021</td>
            <td>Interest Payment</td>
            <td>43578297854906578467</td>
            <td>CR</td>
            <td>NGN642,000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
