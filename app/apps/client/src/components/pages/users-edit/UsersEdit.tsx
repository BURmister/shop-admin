import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchOneUser, getOneUser } from '../../../redux/slices/users/oneUser.slice';

import styles from './UsersEdit.module.scss';
import back from '../../../assets/back.svg';

const UsersEdit: FC = () => {
   const user = useAppSelector(getOneUser);
   const dispatch = useAppDispatch();

   const params = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Изменить сотрудника';
      params.id && dispatch(fetchOneUser(params.id));
   }, []);

   if (user === null) {
      return <h1>сотрудник не найден</h1>;
   }

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
               <label htmlFor="firstName">Имя</label>
               <input id="firstName" type="text" placeholder="Имя" value={user.firstName}/>
            </span>
            <span>
               <label htmlFor="secondName">Фамилия</label>
               <input id="secondName" type="text" placeholder="Фамилия" value={user.secondName}/>
            </span>
            <span>
               <label htmlFor="role">Должность</label>
               <input id="role" type="text" placeholder="Должность" value={user.role}/>
            </span>
            <button type="button">Применить изменения</button>
         </form>
      </div>
   );
};

export default UsersEdit;
