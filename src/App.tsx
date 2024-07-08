import { useEffect } from 'react'
import './App.scss'
import { useTheme } from './hooks/useTheme';
import Header from './Components/Header/Header';
import InputAddTask from './Components/InputAddTask';
import ToDoList from './Components/ToDoList';
import { RootState } from './store/store';
import { useSelector } from "react-redux";
import ListInfo from './Components/ListInfo';

function App() {
  const theme = useTheme();

  const {count} = useSelector((state: RootState) => state);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
  
    });
  });

  // function changeTheme() {
  //   theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  // }

  return (
    <main>
      <Header />

      <h1 >todos</h1>
      <div className="card">
        <InputAddTask />
        {count > 0 &&
          <>
            <ToDoList />
            <ListInfo />
          </>}

      </div>

    </main>
  )
}

export default App;
