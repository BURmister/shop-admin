import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchOneProduct, getOneProduct } from '../../../redux/slices/products/oneProduct.slice';

import styles from './ProductsEdit.module.scss';
import back from '../../../assets/back.svg';

const ProductsEdit: FC = () => {
   const product = useAppSelector(getOneProduct)
   const dispatch = useAppDispatch()

   const params = useParams();


   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Изменить товар';
      params.id && dispatch(fetchOneProduct(params.id));
   }, []);

   if (product === null) {
      return <h1>товар не найден</h1>
   }

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
               <h3>Артикул</h3>
               <p>{product._id}</p>
            </span>
            <span>
               <label htmlFor="name">Название</label>
               <input id="name" type="text" placeholder="Название" value={product.name} />
            </span>
            <span>
               <label htmlFor="description">Описание</label>
               <textarea id="description" placeholder="Описание" value={product.description} />
            </span>
            <div>
               <h3>Пол</h3>
               <span>
                  <div>
                     <input name="gender" type="radio" id="male" value="Мужской" />
                     <label htmlFor="male">Мужской</label>
                  </div>
                  <div>
                     <input name="gender" type="radio" id="female" value="Женский" />
                     <label htmlFor="female">Женский</label>
                  </div>
               </span>
            </div>
            <span>
               <label htmlFor="category">Категория</label>
               <input id="category" type="text" placeholder="Категория" value={product.category} />
            </span>
            <span>
               <label htmlFor="producer">Производитель</label>
               <input id="producer" type="text" placeholder="Производитель" value={product.producer} />
            </span>
            <span>
               <label htmlFor="size">Размер</label>
               <input id="size" type="text" placeholder="Размер" value={product.size} />
            </span>
            <span>
               <label htmlFor="amount">Количество</label>
               <input id="amount" min="0" type="number" placeholder="Количество" value={product.amount} />
            </span>
            <span>
               <label htmlFor="price">Цена</label>
               <input id="price" min="0" type="number" placeholder="Цена" value={product.price} />
            </span>
            <button type="button">Подтвердить изменения</button>
         </form>
      </div>
   );
};

export default ProductsEdit;
