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
        // находим индекс в массиве нужного элемента
        const index = counters.findIndex(({id}) => counterId === id);
        // делаем полное копирования массива с объектами с состоянием
        const cloneCounter = JSON.parse(JSON.stringify(counters));
        // обновляем value
        cloneCounter[index].value += 1;
        // обновляем состояние
        setCounters(cloneCounter);
        
        // Это не сработало
        // const update = {...counters[index], ...counters[index].value++}
        // const newState = [
        //     ...counters.slice(0, index),
        //     update,
        //     ...counters.slice(index + 1)
        // ]

        // Это тоже не сработало
        // counters[index].value += 1;
    }

    const decrementHandler = (counterId) => {
        const index = counters.findIndex(({id}) => counterId === id);
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
