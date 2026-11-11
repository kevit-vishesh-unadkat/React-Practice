import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Users from '../../../../04hooks/src/Users';

// GET:Fetch user

export const  fetchUsers=createAsyncThunk(
    "/users/fetchUsers",
    async()=>{
        const response =await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok)
        {
            throw new Error("failed to fetch users");
        }

        return await response.json();
    }
);

// POST : Add uses

export const addUser=createAsyncThunk(
    "users/addUser",
    async(user)=>{
        const response =await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(user),
            }
        );

        if(!response.ok){
            throw new Error("Failed To add users")
        }
        return await response.json();
    }
);

// DELETE: Delete user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    return id;
  }
);


const userSlice=createSlice({
    name:"users",

    initialState:{
        users:[],
        status:"idle",
        error:null,
    },

    reducers:{},

    extraReducers:(builder)=>{
        builder
          .addCase(fetchUsers.pending,(state)=>{
            state.status="loading";
            state.error=null;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
           state.status = "succeeded";
           state.users = action.payload;
      })
          .addCase(fetchUsers.rejected, (state, action) => {
           state.status = "failed";
           state.error = action.error.message;
      })

      // Add user
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message;
      })

      // Delete user
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
      });

    },
});


export default userSlice.reducer;