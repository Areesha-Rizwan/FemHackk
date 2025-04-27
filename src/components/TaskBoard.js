import React from "react";

function TaskBoard() {
  const data = [
    { id: 1, title: 'First Item', description: 'This is the first item.' },
    { id: 2, title: 'Second Item', description: 'This is the second item.' },
    { id: 3, title: 'Third Item', description: 'This is the third item.' },
  ];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div style={{ width: "45%", background: "#f0f0f0", padding: "10px" }}>
          <h2>To Do</h2>
          <div className="table-container">
            <table className="responsive-table" style={{ width: "100%" }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <div style={{ width: "45%", background: "#f0f0f0", padding: "10px" }}>
          <h2>In Progress</h2>
          <div className="table-container">
            <table className="responsive-table" style={{ width: "100%" }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div style={{ width: "45%", background: "#f0f0f0", padding: "10px" }}>
          <h2>Done</h2>
          <div className="table-container">
            <table className="responsive-table" style={{ width: "100%" }}>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      
      </div>
    </div>
  );
}

export default TaskBoard;
