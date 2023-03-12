import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchProducts, getProducts } from '../../../redux/slices/products/products.slice';

import styles from './Products.module.scss';
import back from '../../../assets/back.svg';
import shirt from '../../../assets/shirt.svg';
import edit from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';
import minus from '../../../assets/minus.svg';

const Products: FC = () => {
   const products = useAppSelector(getProducts);
   const dispatch = useAppDispatch();

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Товары';
      dispatch(fetchProducts());
   }, []);

   return (
      <div className={styles.wrapper}>
         <nav>
            <Link className="back" to="/" aria-label="назад на главную">
               <img src={back} />
               Назад
            </Link>
            <Link className="new product" to="/products/add" aria-label="добавить новый товар">
               Создать
               <img src={shirt} />
            </Link>
         </nav>
         <div className={styles.table}>
            <form className={styles.table__row}>
               <input type="search" placeholder="Поиск товара по   артиклу / названию" />
               <button type="button">Поиск</button>
            </form>
            {products.map((item, index) => (
               <div className={styles.table__row} key={index}>
                  <span>
                     <h3>артикул</h3>
                     {item._id}
                  </span>
                  <span>
                     <h3>название</h3>
                     {item.name}
                  </span>
                  <span>
                     <h3>производитель</h3>
                     {item.producer}
                  </span>
                  <span>
                     <h3>пол</h3>
                     {item.gender}
                  </span>
                  <span>
                     <h3>размер</h3>
                     {item.size}
                  </span>
                  <span>
                     <h3>количество</h3>
                     {item.amount}шт
                  </span>
                  <span>
                     <h3>цена</h3>
                     {item.price} ₽
                  </span>
                  <span>
                     <button className={styles.plus} type="button" title="+1 данный товар">
                        <img src={deleteIcon} />
                     </button>
                     <button className={styles.minus} type="button" title="-1 данный товар">
                        <img src={minus} />
                     </button>
                     <Link className={styles.edit} to={`/products/edit/${item._id}`} title="изменить товар">
                        <img src={edit} />
                     </Link>
                     <button className={styles.delete} type="button" title="удалить все количество">
                        <img src={deleteIcon} />
                     </button>
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Products;
