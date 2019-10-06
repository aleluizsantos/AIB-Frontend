import React, { useState } from 'react';
import api from '../../Services/api';

export default function Login( { history } ) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault(); //fazer com que o From não direcione para nenhum lugar página

        const response = await api.post('/sessions', { email });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <p>Ofereça <strong>Spot</strong> para Programadores e encontre <strong>taletos</strong> para sua empresa</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}