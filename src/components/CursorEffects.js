// useCursor.js
import { useEffect } from 'react';

export default function useCursor(cursorDot, cursorOutline) {
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursorDot.current && cursorOutline.current) {
                cursorDot.current.style.left = `${e.clientX}px`;
                cursorDot.current.style.top = `${e.clientY}px`;
                cursorOutline.current.style.left = `${e.clientX}px`;
                cursorOutline.current.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [cursorDot, cursorOutline]);
}