import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
    title: string;
    backgroundImage1: string;
    backgroundImage2: string;
}

const Hero: React.FC<HeroProps> = ({ title, backgroundImage1, backgroundImage2 }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundContainer}>
                <div
                    className={styles.background}
                    style={{
                        backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})`,
                    }}
                />
                <div className={styles.content}>
                    <h1>{title}</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;