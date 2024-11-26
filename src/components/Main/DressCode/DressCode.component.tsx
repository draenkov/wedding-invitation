import React, { FC } from 'react';
import styles from 'components/Main/DressCode/DressCode.module.scss';

const colors = ['#252525', '#2e3458', '#828956', '#c16036', '#fff7d2'];

const DressCode: FC = () => (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <h3 className={styles.title}>Дресс-код</h3>
            <div className={styles.dressCode}>
                <p>
                    Если вам сложно определиться с нарядом на праздник, то вы можете поддержать
                    цветовую гамму нашей свадьбы
                </p>
                <div className={styles.colorsWrap}>
                    {colors.map(colorItem => (
                        <div
                            className={styles.color}
                            key={colorItem}
                            style={{ backgroundColor: colorItem }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default DressCode;