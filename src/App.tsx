import * as React from 'react';
import './style.css';
import TaskList from './TaskList';

export default function App() {
  const [task, setTask] = React.useState('');
  const [taskList, setTaskList] = React.useState([]);
  const inputElement = React.useRef<HTMLInputElement>();

  return (
    <div>
      <div>
        <input
          ref={inputElement}
          value={task}
          placeholder="Add new task"
          onChange={(e) => setTask(e.target.value)}
        />{' '}
        <button
          onClick={() => {
            setTaskList([
              ...taskList,
              { id: new Date().getTime(), value: task },
            ]);
            setTask('');
            inputElement.current.focus();
          }}
        >
          Add a task
        </button>
      </div>

      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
