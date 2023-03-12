import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchDelivers, getDelivers } from '../../../redux/slices/delivers/delivers.slice';

import styles from './Delivers.module.scss';
import back from '../../../assets/back.svg';
import delivery from '../../../assets/delivery.svg';
import edit from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';
import deliveryDone from '../../../assets/delivery-done.svg';

const Delivers: FC = () => {
   const delivers = useAppSelector(getDelivers);
   const dispatch = useAppDispatch();

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Доставки';
      dispatch(fetchDelivers());
   }, []);

   return (
      <div className={styles.wrapper}>
         <div className={styles.wrapper}>
            <nav>
               <Link className="back" to="/" aria-label="назад на главную">
                  <img src={back} />
                  Назад
               </Link>
               <Link className="new delivery" to="/delivers/add" aria-label="добавить новую доставку">
                  Создать
                  <img src={delivery} />
               </Link>
            </nav>
            <div className={styles.table}>
               <form className={styles.table__row}>
                  <input type="search" placeholder="Поиск сотрудника по   коду / названию" />
                  <button type="button">Поиск</button>
               </form>
               {delivers.map((item, index) => (
                  <div className={styles.table__row} key={index}>
                     <span>
                        <h3>код</h3>
                        {item._id}
                     </span>
                     <span>
                        <h3>название</h3>
                        {item.deliveryName}
                     </span>
                     <span>
                        <h3>откуда</h3>
                        {item.from}
                     </span>
                     <span>
                        <h3>начало</h3>
                        {item.begging}
                     </span>
                     <span>
                        <Link className={styles.edit} to={`/delivers/edit/${item._id}`} title="изменить доставку">
                           <img src={edit} />
                        </Link>
                        <button className={styles.done} type="button" title="принять завершенную доставку">
                           <img src={deliveryDone} />
                        </button>
                        <button className={styles.delete} type="button" title="удалить доставку">
                           <img src={deleteIcon} />
                        </button>
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Delivers;
