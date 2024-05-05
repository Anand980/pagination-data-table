import React, { useState, useEffect } from 'react';
import './style.css';
import tabledata from './Tabledata';

export default function App() {
  const [curPage, setCurPage] = useState(1);
  let start = 5 * curPage - 5;

  const tabledatafilter = tabledata.slice(start, start + 5);

  return (
    <div>
      <table>
        {tabledatafilter.map((td, index) => (
          <tr>
            <td>{td.id}</td>
            <td>{td.name}</td>
            <td>{td.company}</td>
          </tr>
        ))}
      </table>
      <br />
      <div>
        <button onClick={() => setCurPage(curPage - 1)}>⏮Prev</button>
        <span>{curPage}</span>
        <button onClick={() => setCurPage(curPage + 1)}>Next⏭</button>
      </div>
    </div>
  );
}
