import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTasks, addTask, removeTask, updateTask } from '../services/taskService';

// Exporta TaskContext
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener tareas del backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Funciones CRUD
  const addNewTask = async (newTask) => {
    try {
  console.log('entre', newTask)

      const data = await addTask(newTask);
  console.log('entre data', data)

      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.error('Error al agregar tarea', error);
    }
  };

  const removeTaskById = async (id) => {
    try {
      await removeTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error al eliminar tarea', error);
    }
  };

  const editTaskById = async (id, updatedTask) => {
    try {
      const data = await updateTask(id, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, ...data } : task
        )
      );
    } catch (error) {
      console.error('Error al actualizar tarea', error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, loading, addNewTask, removeTaskById, editTaskById }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
