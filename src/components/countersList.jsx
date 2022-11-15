import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };

    const incrementHandler = (counterId) => {
        const index = counters.findIndex(({ id }) => counterId === id);
        const update = { ...counters[index], value: counters[index].value += 1 };
        const newState = [
            ...counters.slice(0, index),
            update,
            ...counters.slice(index + 1)
        ]

        setCounters(newState)

    }

    const decrementHandler = (counterId) => {
        const index = counters.findIndex(({ id }) => counterId === id);
        const cloneCounter = JSON.parse(JSON.stringify(counters));
        cloneCounter[index].value -= 1;
        if (cloneCounter[index].value >= 0) {
            setCounters(cloneCounter);
        }
    }

    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} onDelete={handleDelete} onIncrement={incrementHandler} onDecrement={decrementHandler} {...count} />
            ))}
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    );
};
export default CountersList;
