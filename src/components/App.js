import '../styles/App.scss';
//Import de datos de lista de contactos array de 4 objetos data.json
import initialData from '../data/contact.json';
import { useState } from 'react';

function App() {
  //variables estado

  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('all');
  const [name, setName] = useState('');
  const [week, setWeek] = useState(false);
  const [weekend, setWeekend] = useState(false);

  //Funciones manejadoras

  const handleName = (ev) => {
    setName(ev.currentTarget.value);
  };

  const handleWeek = (ev) => {
    setWeek(ev.currentTarget.checked);
  };

  const handleWeekend = (ev) => {
    setWeekend(ev.currentTarget.checked);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const newClub = {
      name: name,
      openOnWeekdays: week,
      openOnWeekend: weekend,
    };
    //Hago clon de lo que hay en data con spread operator y luego añador nuevo club
    setData([...data, newClub]);

    setName('');
    setWeek('');
    setWeekend('');
  };

  //conocer el value del select para filtrar

  const handleFilter = (ev) => {
    setFilter(ev.target.value);
  };

  //borrar un club cuando se hace click sobre botón "x"

  const handleErrase = (ev) => {
    ev.preventDefault();
    data.splice(ev.target.id, 1);
    console.log(ev.target.id);
    setData([...data]);
  };

  //Para cada uno de los objetos de data va a generar ese html y lo acumula en una array, lo guardo en variable htmlClubList
  //filtro en data y despues añado los arrays filtrados con map
  const htmlClubList = data
    .filter((openClub) => {
      if (filter === 'week') {
        return openClub.openOnWeekdays === true;
      } else if (filter === 'weekend') {
        return openClub.openOnWeekend === true;
      } else {
        return true;
      }
    })

    //añade todos los clubs
    .map((oneClub, index) => (
      <li key={index} className="club__item">
        <p className="club__name">Nombre: {oneClub.name}</p>
        <p className="club__week">
          <label className="club__label">
            Abierto entre semana: {oneClub.openOnWeekdays ? 'Sí' : 'No'}
          </label>
        </p>
        <p className="club__weekend">
          <label className="club__label">
            Abierto fin de semana: {oneClub.openOnWeekend ? 'Sí' : 'No'}
          </label>
        </p>
        <div className="club__errase--container">
          <i
            className="fas fa-times-circle club__errase--btn"
            id={index}
            onClick={handleErrase}
          ></i>
        </div>
      </li>
    ));

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
        <form>
          <label className="header__label" htmlFor="show">
            Mostrar:{' '}
          </label>
          <select
            className="header__select"
            id="size"
            name="size"
            onChange={handleFilter}
          >
            <option value="all">Todos</option>
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
          <div>
            <label className="new-club__option">Nombre del club: </label>
            <input
              className="new-club__input"
              type="text"
              name="name"
              id="name"
              placeholder="Escribe aquí el nombre..."
              onChange={handleName}
              value={name}
            />
          </div>
          <div>
            <label className="new-club__option">¿Abre entre semana?</label>
            <input
              className="new-club__input"
              type="checkbox"
              name="week"
              id="week"
              onChange={handleWeek}
              checked={week}
            />
          </div>
          <label className="new-club__option">¿Abre el fin de semana?</label>
          <input
            className="new-club__input"
            type="checkbox"
            name="weekend"
            id="weekend"
            onChange={handleWeekend}
            checked={weekend}
          />

          <div>
            <input
              className="new-club__btn"
              type="submit"
              value="Añadir"
              onClick={handleClick}
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
