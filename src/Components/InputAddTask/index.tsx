import { useEffect, useRef, useState } from 'react'

import s from './style.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import {  useDispatch } from "react-redux";
import { taskSlice } from '../../store/appSlice';
import { AppDispatch } from '../../store/store';

function InputAddTask() {
    const dispatch = useDispatch<AppDispatch>();
    const { addTask } = taskSlice.actions;
    const [text, setText] = useState<string>('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(() => event.target.value);
    };
    const handlerAddTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const trimmedText = text.trim();
            if (trimmedText !== '') {
                dispatch(addTask(trimmedText));
                setText(() => '');
            }
        }
    };

    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    return (
        <div className={s.input_wrap}>
            <label htmlFor="input" hidden></label>
            <div className={s.arrow_img}>
                <GlobalSvgSelector id="arrow-input" />
            </div>
            <input
                ref={inputRef}
                type="text"
                value={text}
                name="input"
                className={s.input_add_task}
                placeholder="What needs to be done?"
                onChange={handleOnChange}
                onKeyDown={handlerAddTask}
            />

        </div>
    )
}

export default InputAddTask;
