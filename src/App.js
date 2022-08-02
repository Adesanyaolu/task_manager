import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id : 1,
            text: 'Meeting at sarah',
            day: 'Feb 9th at 1:30pm',
            reminder: true,
        },
        {
            id : 2,
            text: 'Python Class',
            day: 'Feb 7th at 1:30pm',
            reminder: true,
        },
        {
            id : 3,
            text: 'Alx Meeting',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        }
    ])



    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000) + 1

      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id ))
    }

    // Toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
    }


  return (
    <div className="container">
      <Header title={"Task Tracker"} 
              onAdd={() => setShowAddTask(!showAddTask)}
              showAdd={showAddTask} 
      />
    
      {showAddTask && <AddTask onAdd={addTask} />}
      
      {tasks.length > 0 ? (
      <Tasks 
            tasks = {tasks}
            onDelete = {deleteTask}
            onToggle={toggleReminder} />
      ) : (
        'No Tasks To show'
      )}
    </div>
  )
}

export default App;