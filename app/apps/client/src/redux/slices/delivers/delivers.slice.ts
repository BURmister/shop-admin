import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { delivery } from '../../types/delivers.types';

export const fetchDelivers = createAsyncThunk('delivers/fetchDelivers', async () => {
   const { data } = await axios.get(`http://localhost:3000/api/delivers/all`);
   return data;
});

interface IDelivers {
   delivers: delivery[];
   status: 'loading' | 'success' | 'error';
}

const initialState: IDelivers = {
   delivers: [],
   status: 'loading', // loading | success | error
};

export const deliversSlice = createSlice({
   name: 'delivers',
   initialState,
   reducers: {
      updateStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchDelivers.pending, (state) => {
         state.status = 'loading';
         state.delivers = [];
      });
      builder.addCase(fetchDelivers.fulfilled, (state, action) => {
         state.status = 'success';
         state.delivers = action.payload;
      });
      builder.addCase(fetchDelivers.rejected, (state) => {
         state.status = 'error';
         state.delivers = [];
      });
   },
});

//Alternative to useSelector
export const getDelivers = (state: RootState) => state.delivers.delivers;
export const deliversStatus = (state: RootState) => state.delivers.status;

export const { updateStatus } = deliversSlice.actions;

export default deliversSlice.reducer;
