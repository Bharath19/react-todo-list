import * as React from 'react';

export default function TaskList({ taskList, setTaskList }) {
  const [editTask, setEditTask] = React.useState({});

  const setEditTaskHandler = (taskId) => {
    setEditTask((previousValue) => ({
      ...previousValue,
      [taskId]: true,
    }));
  };

  const handleSave = (task) => {
    setEditTask((previousValue) => ({
      ...previousValue,
      [task.id]: false,
    }));
  };

  return (
    <div>
      <ul>
        {taskList.map((task) => {
          const isEditable = editTask[task.id] || false;
          return (
            <li key={task.id}>
              {isEditable ? (
                <>
                  <input
                    value={task.value}
                    onChange={(e) => {
                      const tasks = taskList.map((t) => {
                        if (t.id === task.id) {
                          t.value = e.target.value;
                        }
                        return t;
                      });
                      setTaskList(tasks);
                    }}
                  />
                  <button onClick={() => handleSave(task)}>Save</button>
                </>
              ) : (
                <>
                  <span>{task.value}</span>
                  <button onClick={() => setEditTaskHandler(task.id)}>
                    Edit
                  </button>{' '}
                </>
              )}
              <button
                onClick={() =>
                  setTaskList(taskList.filter((t) => t.id != task.id))
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
