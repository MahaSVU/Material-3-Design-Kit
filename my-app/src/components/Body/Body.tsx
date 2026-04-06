import React, { ReactNode } from 'react';
import styles from './Body.module.css';

interface BodyProps {
    title?: string;
    description?: ReactNode;
    subDescription?: ReactNode;
    linkLabel?: string;
    linkUrl?: string;
    imageSrc: string;
}

const Body: React.FC<BodyProps> = ({
    title = "Guidance",
    description,
    subDescription,
    linkLabel,
    linkUrl,
    imageSrc
}) => {
    return (
        <section className={styles.guidanceSection}>
            <div className={styles.container}>

                { }
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>

                    <div className={styles.textWrapper}>
                        { }
                        {description && (
                            <div className={styles.description}>
                                {description}
                            </div>
                        )}
                        {subDescription && (
                            <div className={styles.subDescription}>
                                {subDescription}
                            </div>
                        )}
                    </div>

                    {linkLabel && linkUrl && (
                        <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            {linkLabel}
                        </a>
                    )}
                </div>

                { }
                <div className={styles.showcase}>
                    <div className={styles.mockupFrame}>
                        <img
                            src={imageSrc}
                            alt={title}
                            className={styles.showcaseImage}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Body;