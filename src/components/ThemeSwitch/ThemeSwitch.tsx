import { useState, useContext } from 'react'
import { Switch } from '@headlessui/react'
import { ThemeContext } from '../../hooks/ThemeContext';
import { Moon, Sun } from 'phosphor-react';

export default function ThemeSwitch() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="mr-4" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`bg-secondary
          relative inline-flex h-[30px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-400 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none h-[26px] w-[26px] transform rounded-full 
            bg-primary
             shadow-lg ring-0 transition duration-200 ease-in-out flex items-center justify-center`}
                >
                    {
                        theme === 'dark'
                            ?
                            <Sun size={20} weight="bold" />
                            :
                            <Moon size={20} weight="bold" />
                    }
                </span>
            </Switch>
        </div>
    )
}