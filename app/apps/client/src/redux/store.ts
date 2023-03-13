import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import productsReducer from './slices/products/products.slice';
import oneProductReducer from './slices/products/oneProduct.slice';
import deleteProductReducer from './slices/products/deleteProduct.slice';
import addProductReducer from './slices/products/addProduct.slice';

import authReducer from './slices/auth/auth.slice';

import deliversReducer from './slices/delivers/delivers.slice';
import oneDeliveryReducer from './slices/delivers/oneDelivery.slice';
import deleteDeliveryReducer from './slices/delivers/deleteDelivery.slice';
import completeDeliveryReducer from './slices/delivers/completeDelivery.slice';


import usersReducer from './slices/users/users.slice';
import oneUserReducer from './slices/users/oneUser.slice';
import deleteUserReducer from './slices/users/deleteUser.slice';

export const store = configureStore({
   reducer: {
      products: productsReducer,
      oneProduct: oneProductReducer,
      deleteProduct: deleteProductReducer,
      addProduct: addProductReducer,

      delivers: deliversReducer,
      oneDelivery: oneDeliveryReducer,
      deleteDelivery: deleteDeliveryReducer,
      completeDelivery: completeDeliveryReducer,

      users: usersReducer,
      oneUser: oneUserReducer,
      deleteUser: deleteUserReducer,

      auth: authReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
