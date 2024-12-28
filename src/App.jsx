import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
  <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h1 className=" font-bold text-gray-800 mb-6 text-center">Task List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
    </TaskProvider>
  );
}

export default App;
