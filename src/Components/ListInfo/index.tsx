import { useEffect, useRef } from 'react'

import s from './style.module.scss'
import { useSelector } from "react-redux";
import {  AppDispatch, RootState } from '../../store/store';
import { FilterBtns } from '../FilterBtns';
import { Button } from '../FilterBtns/Button';
import {  useDispatch } from "react-redux";
import { taskSlice } from '../../store/appSlice';

// import { deleteTask } from '../../features/functions';

function ListInfo() {
    const { todoList } = useSelector((state: RootState) => state);
    const { removeTask } = taskSlice.actions;

    const dispatch = useDispatch<AppDispatch>();

    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    
    const deleteTask = () => {
        dispatch(removeTask());
    };
    return (
        <div className={s.info}>
            <p className={s.item_count}>{(todoList.filter((todo) => !todo.completed)).length} items left</p>
            <FilterBtns />
            <Button
                text="Clear completed"
                handler={deleteTask}
              />
        
        </div>
    )
}

export default ListInfo;
