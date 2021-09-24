import '../styles/App.scss';
//Import de datos de luista de contactos array de 4 objetos
import initialData from '../data/contact.json';
import { useState } from 'react';

function App() {
  //variables estado

  //Funciones manejadoras

  return (
    <>
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
        <ul className="club__list">
          <li className="club__item">
            <p className="club__name">Nombre:#Book Club</p>
            <p className="club__week">
              <label className="club__label">Abierto entre semana:</label>
            </p>
            <p className="club__weekend">
              <label className="club__label">Abierto fin de semana:</label>
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
