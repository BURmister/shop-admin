import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

type amountProduct = {
   _id: string;
   state: 'plus' | 'minus';
};

export const amountProduct = createAsyncThunk('amountProduct/amountProduct', async (args: amountProduct) => {
   const instance = axios.create({
      // headers: {
      //    Authorization: 'Bearer ' + args.token,
      // },
   });
   if (args.state === 'plus') {
      const { data } = await instance.put(`http://localhost:3000/api/products/plus/${args._id}`);
      return data;
   } else {
      const { data } = await instance.put(`http://localhost:3000/api/products/minus/${args._id}`);
      return data;
   }
});

interface IOneProduct {
   productTitle: {_id: string, name: string} | null;
   amountStatus: 'loading' | 'success' | 'error';
}

const initialState: IOneProduct = {
   productTitle: null,
   amountStatus: 'loading', // loading | success | error
};

export const amountProductSlice = createSlice({
   name: 'amountProduct',
   initialState,
   reducers: {
      updateDeleteStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.amountStatus = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(amountProduct.pending, (state) => {
         state.amountStatus = 'loading';
         state.productTitle = null;
      });
      builder.addCase(amountProduct.fulfilled, (state, action) => {
         state.amountStatus = 'success';
         state.productTitle = action.payload;
      });
      builder.addCase(amountProduct.rejected, (state) => {
         state.amountStatus = 'error';
         state.productTitle = null;
      });
   },
});

//Alternative to useSelector
export const amountStatus = (state: RootState) => state.amountProduct.amountStatus;
export const productTitle = (state: RootState) => state.amountProduct.productTitle;

export const { updateDeleteStatus } = amountProductSlice.actions;

export default amountProductSlice.reducer;
