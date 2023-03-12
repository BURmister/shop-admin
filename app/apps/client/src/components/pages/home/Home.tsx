import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.module.scss'
import user from '../../../assets/user.svg'
import product from '../../../assets/shirt.svg'
import delivery from '../../../assets/delivery.svg'

const Home: FC = () => {

      useEffect(() => {
         window.scrollTo(0, 0);
         document.title = 'Система управления';
      }, []);

   return (
      <div className={styles.wrapper}>
         <Link to="/users">
            <img src={user} />
            <span>Сотрудники</span>
         </Link>
         <Link to="/products">
            <img src={product} />
            <span>Товары</span>
         </Link>
         <Link to="/delivers">
            <img src={delivery} />
            <span>Доставки</span>
         </Link>
      </div>
   );
}

export default Home