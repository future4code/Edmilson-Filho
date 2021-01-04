import { useState } from 'react';

export const useTarefas = (initialValues) => {
    const [ tarefas, setTarefas ] = useState(initialValues);

    const onChange = (value, name) => {
        setTarefas({ ...tarefas, [name]:value });
    }

    const resetTarefas = () => {
        setTarefas(initialValues);
    }

    return { tarefas, onChange, resetTarefas };
};