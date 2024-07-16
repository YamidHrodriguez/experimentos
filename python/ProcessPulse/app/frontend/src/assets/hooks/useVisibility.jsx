// hooks/useVisibility.js
import { useState } from 'react';

export const useVisibility = (initialVisibility = false) => {
    const [isVisible, setIsVisible] = useState(initialVisibility);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return {
        isVisible,
        toggleVisibility,
        setIsVisible, // Agregamos esta función para poder cambiar la visibilidad directamente
    };
};
