import Header from './components/partials/Header';
import Tasks from './components/tasks/Tasks';
import { useState } from 'react'
import AddTask from './components/tasks/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Minha atividade',
        day: '02/02/2002',
        reminder: true
    },
    {
        id: 2,
        text: 'Minha noite 1',
        day: '12/12/2022',
        reminder: false
    },
    {
        id: 3,
        text: 'Minha noite 2',
        day: '12/12/2022',
        reminder: false
    },
    {
        id: 4,
        text: 'Minha noite 3',
        day: '12/12/2022',
        reminder: false
    }
  ])

  const [showAddTask, setShowAddTask] = useState(false)

  // ADD Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
    console.log(tasks)
  }
  

  return (
    <div className="container">
      <Header title='My Tasks' onAdd={
        () => setShowAddTask(!showAddTask)
      } buttonTitle = {showAddTask ? 'Hide' : 'Show'}
        buttonColor = {showAddTask ? 'red' : 'green'}
      />
      
      {/* o && é como se fosse um ternário sem else */}
      {
        showAddTask &&
        <AddTask onAdd={addTask}/>
      }
      

      {
        tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}/>

        ) : ('No tasks to show')
      }
      
    </div>
  );
}

export default App;