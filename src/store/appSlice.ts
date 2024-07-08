import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./apiClient";
import { v4 as uuidv4 } from "uuid";

export const initialState = 
// [] as Task[]
{
  count: 0,
  todoList: [] as Task[],
  currentFilter: 'all',
  filterList:[] as Task[],
  
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.todoList.push(action.payload);
        state.count+=1
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as Task,
      }),
    },
    removeTask(state) {
      const index = state.todoList.findIndex((task) => task.completed );
      console.log(index)
      if(index >=0){
         state.todoList.splice(index, 1);
      state.count-=1
      }
     
    },
    setTaskStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.todoList.findIndex((task) => task.id === action.payload.id);
      state.todoList[index].completed = action.payload.completed;
    },
    setСurrentFilter(state, action: PayloadAction<string>) {
      state.currentFilter = action.payload;
    },
  
  },
});

export default taskSlice.reducer;