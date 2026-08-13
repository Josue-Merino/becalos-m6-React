import { useMemo, useState } from "react";
import { useTasks } from "./hooks/useTasks";
import './App.css'

function App() {
  
  const { tasks, addTask,totalTime, deleteTask } = useTasks();
  const [filter, setFilter] = useState("all");

  const handleSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const task = data.get("task");
    const timeValue = data.get("time");

    if (typeof task !== "string" || typeof timeValue !== "string") return;
    if (!task.trim() || !timeValue.trim()) return;

    const duration = Number(timeValue);
    if (Number.isNaN(duration) || duration <= 0) return;
 
    addTask(task, duration)

    event.currentTarget.reset();

  }

  const filteredTasks = useMemo(() => {

    switch (filter) {

      case "short":
        return tasks.filter(task => task.duration < 30);

      case "long":
        return tasks.filter(task => task.duration >= 30);

      case "recent":
        return [...tasks].sort(
          (a, b) => b.createdAt - a.createdAt
        );

      default:
        return tasks;
    }

  }, [tasks, filter]);


  return (
    <main>
      <h1>Contador de Tareas</h1>
      <h3> Tiempo total de tareas {totalTime}: minutos</h3>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="task"
            placeholder="Nombre de la tarea"
            className="form__input"
          />
          <input
            type="number"
            name="time"
            placeholder="Duración en minutos"
            className="form__input"
          />
          <button className="btn form__btn">Agregar tarea</button>
        </form>
      </div>

      <div className="filter">
        <label htmlFor="select-filter" className="filter__label">Filtrar Tareas por:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          id="select-filter"
          className="filter__select"
        >
          <option value="all">Todas</option>

          <option value="short">Menos de 30 minutos</option>

          <option value="long">30 minutos o más</option>

          <option value="recent">Agregadas recientemente</option>
        </select>
      </div>

      <h2>Lista de Tareas</h2>
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li key={task.id}>
              <p className="task">
                {task.name} - {task.duration} minutos
              </p>

              <button className="btn btn__delete" onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <li>No hay Resultados.</li>
        )}
      </ul>
    </main>
  );
}

export default App
