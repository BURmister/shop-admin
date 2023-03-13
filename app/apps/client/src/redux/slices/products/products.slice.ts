import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { product } from '../../types/product.types';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (searchTerm?: string) => {
   const { data } = await axios.get(`http://localhost:3000/api/products/all${searchTerm ? `?searchTerm=${searchTerm}` : ''}`);
   return data;
});

interface IProducts {
   products: product[];
   status: 'loading' | 'success' | 'error';
}

const initialState: IProducts = {
   products: [],
   status: 'loading', // loading | success | error
};

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      updateStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
      filterProducts: (state, action: PayloadAction<string>) => {
         state.products = state.products.filter((product) => product._id !== action.payload);
      },
      // changeAmount: (state, action: PayloadAction<{ _id: string; state: 'plus' | 'minus' }>) => {
      //    const product = state.products.find((product) => product._id === action.payload._id);
      //    if (product !== undefined) {
      //       product.amount + 1;
      //       state.products = state.products.map((item) => (item._id !== product._id ? item : product));
      //    }
      // },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchProducts.pending, (state) => {
         state.status = 'loading';
         state.products = [];
      });
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
         state.status = 'success';
         state.products = action.payload;
      });
      builder.addCase(fetchProducts.rejected, (state) => {
         state.status = 'error';
         state.products = [];
      });
   },
});

//Alternative to useSelector
export const getProducts = (state: RootState) => state.products.products;
export const productsStatus = (state: RootState) => state.products.status;

export const { updateStatus } = productsSlice.actions;
export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
