import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';
import { user } from '../../types/users.types';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
   const { data } = await axios.get(`http://localhost:3000/api/users/all`);
   return data;
});

interface IUsers {
   users: user[];
   status: 'loading' | 'success' | 'error';
}

const initialState: IUsers = {
   users: [],
   status: 'loading', // loading | success | error
};

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      updateStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state) => {
         state.status = 'loading';
         state.users = [];
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
         state.status = 'success';
         state.users = action.payload;
      });
      builder.addCase(fetchUsers.rejected, (state) => {
         state.status = 'error';
         state.users = [];
      });
   },
});

//Alternative to useSelector
export const getUsers = (state: RootState) => state.users.users;
export const usersStatus = (state: RootState) => state.users.status;

export const { updateStatus } = usersSlice.actions;

export default usersSlice.reducer;
