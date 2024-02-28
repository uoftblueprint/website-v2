import Image from 'next/image';
import _ from '@/config/firebase';
import styles from '@/app/page.module.css';
import TestPage from '@/app/TestPage.js';
import { MantineProvider } from '@mantine/core';

export default function Home() {
    return (
        <MantineProvider>
            <TestPage />

        </MantineProvider>
    );
}
