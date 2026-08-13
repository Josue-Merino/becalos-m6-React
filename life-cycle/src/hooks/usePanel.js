import { useState, useEffect, useMemo } from "react";


export function usePanel ( shipState ) {
    const [distance, setDistance] = useState(0);
    const [fuel, setFuel] = useState(100);

    useEffect(() => {

        if (shipState !== "En órbita") return;

        console.log("Panel listo");

        const interval = setInterval(() => {

            setFuel(prev => {

                if (prev <= 1) {
                    console.log("¡Combustible recargado!");
                    return 100;
                }

                return prev - 1;

            });

            setDistance(prev => prev + 10);

        }, 1000);

        return () => {

            clearInterval(interval);
            console.log("Panel apagado");

        };

    }, [shipState]);

    useEffect(() => {
        console.log("Combustible actualizado");
    }, [fuel]);

    const statusMessage = useMemo(() => {

        return `Estado: ${shipState}`;

    }, [shipState]);

    return {
        distance,
        fuel,
        statusMessage
    }
}