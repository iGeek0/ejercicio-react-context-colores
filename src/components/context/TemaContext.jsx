import { createContext, useContext, useState } from 'react';

const TemaContext = createContext();

const TemaProvider = ({ children }) => {

    const [temaColor, setTemaColor] = useState('#ff5722');

    return (
        <TemaContext.Provider value={{ temaColor, setTemaColor }}>
            {children}
        </TemaContext.Provider>
    );
};

const useTema = () => {
    const context = useContext(TemaContext);
    if (!context) {
        throw new Error('useTema debe ser utilizado dentro de un TemaProvider');
    }
    return context;
};

export { TemaProvider, useTema };
