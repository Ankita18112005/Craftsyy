import { useEffect, useRef, useState } from 'react';

const SplitText = ({
    text,
    className = '',
    delay = 50,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    threshold = 0.1,
    rootMargin = '-50px',
    textAlign = 'center',
    onLetterAnimationComplete
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                    if (onLetterAnimationComplete) {
                        setTimeout(onLetterAnimationComplete, text.length * delay + 1000);
                    }
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin, onLetterAnimationComplete, text.length, delay]);

    const letters = text.split('');

    return (
        <span
            ref={ref}
            className={className}
            style={{ display: 'inline-block', textAlign, whiteSpace: 'normal', overflowWrap: 'break-word' }}
        >
            {letters.map((letter, index) => (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        transition: `all 1s ease-out ${index * (delay / 1000)}s`,
                        opacity: isVisible ? animationTo.opacity : animationFrom.opacity,
                        transform: isVisible ? animationTo.transform : animationFrom.transform,
                        willChange: 'opacity, transform',
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </span>
            ))}
        </span>
    );
};

export default SplitText;
