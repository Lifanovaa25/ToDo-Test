import { useEffect } from 'react'

import s from './Header.module.scss'
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

function Header() {
    const theme = useTheme();
   
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
            // alert(component)
        });
    });

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
        // setTheme(theme === "light" ? "dark" : "light");
    }
  
    return (
        <header>
            <nav>
                <div className={s.theme_switch_wrapper} >
                    <label className={s.theme_switch} htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" onChange={changeTheme} />
                        <div className={[s.slider, s.round].join(' ')}></div>
                    </label>
                
                </div>
            </nav>

        </header>
    )
}

export default Header;
