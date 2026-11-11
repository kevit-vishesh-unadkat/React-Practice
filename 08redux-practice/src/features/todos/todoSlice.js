import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[],
};

const todoSlice=createSlice({
    name:"todos",
    initialState,

    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:Date.now(),
                title:action.payload,
                completed:false,
            });
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(
                (todo)=>todo.id!==action.payload
            );
        },
        editTodo:(state,action)=>{
            const{id,title}=action.payload;

            const todo=state.todos.find(
                (todo)=>todo.id===id
            );
            if(todo){
                todo.title=title;
            }
        },
        toggleTodo:(state,action)=>{
            const todo=state.todos.find(
                (todo)=>todo.id===action.payload
            );
            if(todo){
                todo.completed!=todo.completed;
            }
        },
    },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} = todoSlice.actions;

export default todoSlice.reducer;