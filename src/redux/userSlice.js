import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const postProduct = createAsyncThunk(
  'user/postProduct',
  async function (newData, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        'https://slim-mom-project.herokuapp.com/api/users/public',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        }
      );
      if (!response.ok) {
        throw new Error('ERROR! ERROR! ERROR!');
      }
      const data = await response.json();
      dispatch(add(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: null,
    error: null,
    isPending:false,
  },
  reducers: {
    add(state, action) {
      state.user = action.payload;
    },
    
  },
  extraReducers: {
    [postProduct.pending]: state => {
      state.status = 'loading';
      state.isPending = true;
    },
    [postProduct.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
      state.isPending = false;
    },
    [postProduct.rejected]: setError,
  },
});

export const { add} = userSlice.actions;
