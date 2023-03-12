import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';

import styles from './DeliversEdit.module.scss';
import back from '../../../assets/back.svg';
import { fetchOneDelivery, getOneDelivery } from '../../../redux/slices/delivers/oneDelivery.slice';

const DeliversEdit: FC = () => {
   const delivery = useAppSelector(getOneDelivery);
   const dispatch = useAppDispatch();

   const params = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Изменить доставку';
      params.id && dispatch(fetchOneDelivery(params.id));
   }, []);

   if (delivery === null) {
      return <h1>доставка не найдена</h1>;
   }

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
               <input id="name" type="text" placeholder="Название" value={delivery.deliveryName} />
            </span>
            <span>
               <label htmlFor="description">Описание</label>
               <textarea id="description" placeholder="Описание" value={delivery.deliveryDescription} />
            </span>
            <span>
               <label htmlFor="from">Откуда</label>
               <input id="from" type="text" placeholder="Откуда" value={delivery.from} />
            </span>
            <span>
               <label htmlFor="begging">Начало</label>
               <input id="begging" type="text" placeholder="Начало" value={delivery.begging} />
            </span>
            <span>
               <label htmlFor="ending">Конец</label>
               <input id="ending" type="text" placeholder="Конец" value={delivery.ending} />
            </span>
            <button type="button">Применить изменения</button>
         </form>
      </div>
   );
};

export default DeliversEdit;
