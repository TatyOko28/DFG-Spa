import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  phone: string;
  email: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    // Vous pouvez ajouter d'autres reducers ici pour gérer différentes actions
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
