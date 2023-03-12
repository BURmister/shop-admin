import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './DeliversAdd.module.scss';
import back from '../../../assets/back.svg';

const DeliversAdd: FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Добавить доставку';
   }, []);

   return (
      <div className={styles.wrapper}>
         <nav>
            <Link className="back" to="/" aria-label="назад на главную">
               <img src={back} />
               Главная
            </Link>
            <Link className="back" to="/delivers" aria-label="назад к списку доставок">
               <img src={back} />
               Назад
            </Link>
         </nav>
         <form className={styles.table}>
            <span>
               <label htmlFor="name">Название</label>
               <input id="name" type="text" placeholder="Название" />
            </span>
            <span>
               <label htmlFor="description">Описание</label>
               <textarea id="description" placeholder="Описание" />
            </span>
            <span>
               <label htmlFor="from">Откуда</label>
               <input id="from" type="text" placeholder="Откуда" />
            </span>
            <span>
               <label htmlFor="begging">Начало</label>
               <input id="begging" type="text" placeholder="Начало" />
            </span>
            <span>
               <label htmlFor="ending">Конец</label>
               <input id="ending" type="text" placeholder="Конец" />
            </span>
            <button type="button">Добавить</button>
         </form>
      </div>
   );
};

export default DeliversAdd;
