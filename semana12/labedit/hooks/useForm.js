import React, { useState } from 'react';

export const useForm = (initialValues) => {
    const [ form, setForm ] = useState(initialValues);
    
    onChange = (value, name) => {
        setForm({ ...form, [name]: value });
    }

    return { form, onChange };
}