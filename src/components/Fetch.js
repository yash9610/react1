import React, { useEffect, useState } from 'react'

function Fetch() {
    const[data , setData] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
    }, [])
    return (
        <div>
          <table border={1} style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th style={{textAlign: 'center'}}>Title</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }    

export default Fetch