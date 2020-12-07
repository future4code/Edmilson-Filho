import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            Error Page
        </div>
    )
}

export default Error;