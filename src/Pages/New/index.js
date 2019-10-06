import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';

export default function New() {

    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo( () => { 
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
     }, [thumbnail])

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="camera"/>
            </label>

            <label htmlFor="company">Empresa *</label>
            <input
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">Tecnologia * <span>separadas por virgula</span> </label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">Valor da diária <span>(Em branco para gratuito)</span> </label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type='submit' className="btn">Cadastrar</button>
        </form>
    )
}