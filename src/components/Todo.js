import React, { useState } from 'react';

function Todo() {
  // task will be a String, so init with ''
  const [task, updateTask] = useState('');

  // tasks will be an array of String, so init with []
  const [tasks, updateTasks] = useState([]);

  // method called when text on input changes
  const handleInputChange = event => {
    //console.log('inputTask:', event.target.value);
    updateTask(event.target.value);
  }

  // method called when button is pressed
  const handleFormSubmit = event => {
    // prevent button action Submit (to not reload page)
    event.preventDefault();
    // updateTasks are waiting an Array of Strings, so pass the old array and the new String
    updateTasks([... tasks, task]);
    // to clean task, filled by handleInputChange
    updateTask('');
  }

  return(
    <>      
      <form onSubmit={handleFormSubmit}>
        <input 
          data-testid="form-field"
          onChange={handleInputChange}
          placeholder="Type a new task"
          type="text"
          value={task}
        />
        <button
          data-testid="form-btn"
          type="submit"
        >New Task</button>
      </form>
      <table data-testid="table">
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {/* for every t in tasks, do. Keep the array index as a key, its not the better way, but works */}
          { tasks.map((t, index) => (
            <tr key={index}>
              <td>{t}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todo;