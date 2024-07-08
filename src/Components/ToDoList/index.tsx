import s from './style.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { taskSlice } from '../../store/appSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Task } from '../../store/apiClient';

function ToDoList() {
    const { currentFilter, todoList } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { setTaskStatus } = taskSlice.actions;
    const visibleTodos = filterTodos(todoList, currentFilter);

    function filterTodos(todoList: Task[], filter: string) {

        if (filter === 'active') {
            return todoList.filter((todo) => !todo.completed)
        } else if (filter === 'completed') {
            return todoList.filter((todo) => todo.completed)
        } else {
            return todoList
        }
    }

    return (
        <div className={s.tasks}>
            <ul className={s.list}>
                {visibleTodos.map((todo, index) => (
                    <li key={index} className={s.item}>
                        <div className={s.list_text}>
                            <input
                                type="checkbox"
                                id={`${todo.id}-text`}
                                className={`${s.input_checkbox}`}
                                checked={todo.completed}
                                onChange={() => {
                                    dispatch(
                                        setTaskStatus({ completed: !todo.completed, id: todo.id })
                                    );
                                }}
                            />
                            <label htmlFor={`${index}-text`}>{todo.description}</label>
                        </div>
                    </li>

                ))}
            </ul>
        </div>

    )
}

export default ToDoList;
