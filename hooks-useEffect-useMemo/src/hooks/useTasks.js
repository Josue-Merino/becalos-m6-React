import { useState, useMemo, useEffect } from "react";

export function useTasks() {
    // Estado para las tareas
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");

        return storedTasks
            ? JSON.parse(storedTasks)
            : [];
    });

    //  Función que agrega tareas según la tarea y su duración
    const addTask = (name, duration) => {

        setTasks((prevTasks) => [
        ...prevTasks,
        {
            id: crypto.randomUUID(),
            name,
            duration,
            createdAt: Date.now(),
        },
        ]);
    };

    // Persistencia con localStorage
    useEffect(() => {
        // Guardaremos en localStorage las tareas cada que cambien
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);  

    // Obtendremos el tiempo total de las tareas solo cuando cambien
    const totalTime = useMemo(() => {
        return tasks.reduce((total, task) => total + task.duration, 0);
    }, [tasks]);

    // Cada que el tiempo total cambie, cambiaremos el valor en el título de la página
    useEffect(() => {
        document.title = `Total: ${totalTime} minutos`;
    }, [totalTime]);

    // Eleminamos una tarea según su id creando un nuevo arreglo de tareas sin ese elemento
    const deleteTask = id => {
        setTasks((prevTasks) => prevTasks.filter((currentTask) => currentTask.id !== id));
    }


    return {
        tasks,
        addTask,
        totalTime,
        deleteTask
    };
}