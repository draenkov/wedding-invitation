import React, { FC } from 'react';
import styles from 'components/Info/Info.module.scss';
import Image from 'next/image';
import photo from 'assets/img/photo2.jpg';

const Info: FC = () => (
    <div className={styles.wrap}>
        <div className={styles.info}>
            <div className={styles.infoItem}>
                <p className={styles.title}>Когда?</p>
                <p>12 июля 2025</p>
            </div>
            <div className={styles.infoItem}>
                <p className={styles.title}>Где?</p>
                <p>Гродно</p>
            </div>
        </div>
        <div>
            <Image
                src={photo as string}
                alt="Второе лучшее фото молодых"
                className={styles.photo}
            />
        </div>
    </div>
);

export default Info;
