import styles from './hero.module.css';

interface HeroProps {
    title: string;
    description: string;
}

export const Hero = (props: HeroProps) => {
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </>
    );
}