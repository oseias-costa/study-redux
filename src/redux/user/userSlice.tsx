import { createSlice, PayloadAction } from '@reduxjs/toolkit' 

export interface UserState {
    id: number;
    username: string;
    email: string;
}

const initialState: UserState = {
    id: 1,
    username: 'Oseias',
    email: 'oseias@valioze.com.br'
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})

export const { updateUsername } = userSlice.actions
export default userSlice.reducer