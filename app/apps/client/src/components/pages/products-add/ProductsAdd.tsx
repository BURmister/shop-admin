import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductsAdd.module.scss';
import back from '../../../assets/back.svg';

const ProductsAdd: FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Добавить товар';
   }, []);

   return (
      <div className={styles.wrapper}>
         <nav>
            <Link className="back" to="/" aria-label="назад на главную">
               <img src={back} />
               Главная
            </Link>
            <Link className="back" to="/products" aria-label="назад к списку товаров">
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
            <div>
               <h3>Пол</h3>
               <span>
                  <div>
                     <input name="gender" type="radio" id="male" value="Мужской" />
                     <label htmlFor="male">Мужской</label>
                  </div>
                  <div>
                     <input name="gender" type="radio" id="female" checked value="Женский" />
                     <label htmlFor="female">Женский</label>
                  </div>
               </span>
            </div>
            <span>
               <label htmlFor="category">Категория</label>
               <input id="category" type="text" placeholder="Категория" />
            </span>
            <span>
               <label htmlFor="producer">Производитель</label>
               <input id="producer" type="text" placeholder="Производитель" />
            </span>
            <span>
               <label htmlFor="size">Размер</label>
               <input id="size" type="text" placeholder="Размер" />
            </span>
            <span>
               <label htmlFor="amount">Количество</label>
               <input id="amount" min="0" type="number" placeholder="Количество" />
            </span>
            <span>
               <label htmlFor="price">Цена</label>
               <input id="price" min="0" type="number" placeholder="Цена" />
            </span>
            <button type="button">Добавить</button>
         </form>
      </div>
   );
};

export default ProductsAdd;
