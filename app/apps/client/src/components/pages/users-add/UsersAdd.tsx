import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './UsersAdd.module.scss';
import back from '../../../assets/back.svg';

const UsersAdd: FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Добавить сотрудника';
   }, []);

   return (
      <div className={styles.wrapper}>
         <nav>
            <Link className="back" to="/" aria-label="назад на главную">
               <img src={back} />
               Главная
            </Link>
            <Link className="back" to="/users" aria-label="назад к списку сотрудников">
               <img src={back} />
               Назад
            </Link>
         </nav>
         <form className={styles.table}>
            <span>
               <label htmlFor="name">Логин</label>
               <input id="name" type="text" placeholder="Логин" />
            </span>
            <span>
               <label htmlFor="password">Пароль</label>
               <input id="password" type="text" placeholder="Пароль" />
            </span>
            <span>
               <label htmlFor="firstName">Имя</label>
               <input id="firstName" type="text" placeholder="Имя" />
            </span>
            <span>
               <label htmlFor="secondName">Фамилия</label>
               <input id="secondName" type="text" placeholder="Фамилия" />
            </span>
            <span>
               <label htmlFor="role">Должность</label>
               <input id="role" type="text" placeholder="Должность" />
            </span>
            <button type="button">Добавить</button>
         </form>
      </div>
   );
};

export default UsersAdd;
