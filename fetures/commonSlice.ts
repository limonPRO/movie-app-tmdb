
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  text: string | null;
  
}

const initialState: initialStateType = {
 text:""
};

export const commonSlice = createSlice({
  name: "Common",
  initialState,
  reducers: {

    handleInput:(state ,action: PayloadAction<{ text: string; }> )=>{
      const {text}=action.payload
      state.text = text
    }

  },
});

export const { handleInput } = commonSlice.actions;

export default commonSlice.reducer;