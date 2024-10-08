import Image from 'next/image';
import { Group } from '@mantine/core';

import styles from './header.module.css';

export default function Header(props) {
    return (
        <Group className={styles.header}>
            <div className={styles.child}>{props.children}</div>
            <div>
                <a href='https://karlsencoin.com' target='_blank' rel='noopener noreferrer'>
                    <Image
                        src='/karlsen-icon.svg'
                        alt='Karlsen Logo'
                        className={styles.karlsenLogo}
                        width={48}
                        height={48}
                        priority
                    />
                </a>
            </div>
        </Group>
    );
}
