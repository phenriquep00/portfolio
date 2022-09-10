import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';

type ThemeProviderType = PropsWithChildren<{
    initialTheme: any;
}>;

const getInitialTheme = () => {
    if ( typeof window !== 'undefined' && window.localStorage ) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }

        return 'light';

    }
};

export const ThemeContext = createContext<any>(undefined);

export const ThemeProvider = ({ initialTheme, children }: ThemeProviderType) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme: any) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === "dark";

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme)
    };

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}