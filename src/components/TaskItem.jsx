function TaskItem({ task, removeTaskById }) {
    return (
      <div className="flex justify-between items-center border p-4 mb-4 text-gray-800">
        <div className="text-gray-800">
          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <span>{task.completed ? 'Completada' : 'Pendiente'}</span>
        </div>
        <div>
          <button onClick={() => removeTaskById(task._id)} className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    );
  }
  
  export default TaskItem;
  