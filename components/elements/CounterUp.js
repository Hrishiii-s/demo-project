import { useEffect, useState } from 'react'
import Counter from './Counter'

export default function CounterUp({ count }) {
    const [inViewport, setInViewport] = useState(false)

    const checkInViewport = () => {
        const elements = document.getElementsByClassName('odometer')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect()
            const isInViewport = (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
            if (isInViewport) {
                setInViewport(true)
            }
        }
    }

    useEffect(() => {
        checkInViewport();  // Check on mount if it's already in the viewport
        window.addEventListener('scroll', checkInViewport);
        return () => {
            window.removeEventListener('scroll', checkInViewport);
        }
    }, []);

    return (
        <span className="odometer">
            {inViewport ? <Counter end={count} duration={20} /> : null}
        </span>
    );
}
