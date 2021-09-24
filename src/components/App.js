import '../styles/App.scss';
//Import de datos de luista de contactos array de 4 objetos
import data from '../data/contact.json';
import { useState } from 'react';

function App() {
  //variables estado

  //Funciones manejadoras

  //Para cada uno de los objetos de data va a generar ese html y lo acumula en una array, lo guardo en variable htmlClubList
  const htmlClubList = data.map((oneClub, index) => (
    <li key={index} className="club__item">
      <p className="club__name">Nombre: {oneClub.name}</p>
      <p className="club__week">
        <label className="club__label">Abierto entre semana:</label>
      </p>
      <p className="club__weekend">
        <label className="club__label">Abierto fin de semana:</label>
      </p>
    </li>
  ));

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
        <form>
          <label htmlFor="show">Mostrar: </label>
          <select className="header__select" id="size" name="size">
            <option value="All">Todos</option>
            <option value="week">los que abren entre semana</option>
            <option value="wekkend">los que abren el fin de semana</option>
          </select>
        </form>
      </header>
      <main>
        {/* club list */}
        <ul className="club__list">{htmlClubList}</ul>

        {/* new club */}
        <form className="new-club__form">
          <h2 className="new-club__title">Añade un nuevo club</h2>
          <label className="new-club__option">Nombre del club</label>
          <input
            className="new-club__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <label className="new-club__option">¿Abre entre semana?</label>
          <input
            className="new-club__input"
            type="checkbox"
            name="week"
            id="week"
          />
          <label className="new-club__option">¿Abre el fin de semana?</label>
          <input
            className="new-club__input"
            type="checkbox"
            name="weekend"
            id="weekend"
          />

          <input className="new-club__btn" type="submit" value="Añadir" />
        </form>
      </main>
    </div>
  );
}

export default App;
