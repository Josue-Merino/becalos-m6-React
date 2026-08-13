#   Hooks useEffect y useMemo
En este workshop, vamos a construir una pequeña aplicación en React que simule un "contador de tiempo" donde los usuarios pueden realizar un seguimiento de un conjunto de tareas. Además, utilizaremos `useEffect` para gestionar los efectos secundarios y `useMemo` para optimizar el rendimiento al procesar una lista de tareas.
La solución a este ejercicio esta dividida en el archivo `App.jsx` y `useTasks.js` dentro de la carpeta src.

## Objetivo
El objetivo de este workshop es aprender a utilizar los hooks `useEffect` y `useMemo` dentro de un proyecto de React. Al finalizar, serás capaz de:

1. Practicar la creación de un proyecto React utilizando `Vite`.
2. Utilizar `useEffect` para realizar efectos secundarios (como el manejo de la hora en la interfaz).
3. Utilizar `useMemo` para evitar cálculos innecesarios de las horas totales cuando no cambian las tareas.