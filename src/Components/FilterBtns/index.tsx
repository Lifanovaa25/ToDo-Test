
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from "react-redux";
import { Button } from './Button';

import s from './style.module.scss';
import { taskSlice } from '../../store/appSlice';

export const FilterBtns = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { currentFilter } = useSelector((state: RootState) => state);
    const { setСurrentFilter } = taskSlice.actions;

    const showAllTasks = () => {
        dispatch(setСurrentFilter("all"));
    };

    const showActiveTasks = () => {
        dispatch(setСurrentFilter("active"));
    };

    const showCompletedTasks = () => {
        dispatch(setСurrentFilter("completed"));
    };
    const buttonConfigs = [
        { text: 'All', handler: showAllTasks, isActive: currentFilter === 'all' },
        { text: 'Active', handler: showActiveTasks, isActive: currentFilter === 'active' },
        { text: 'Completed', handler: showCompletedTasks, isActive: currentFilter === 'completed' },
    ];

    return (
        <div className={s.container}>
            {buttonConfigs.map(({ text, handler, isActive }) => (
                <Button
                    key={text}
                    text={text}
                    handler={handler}
                    isActive={isActive}
                />
            ))}
        </div>
    );
}
