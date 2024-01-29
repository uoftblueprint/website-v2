import Image from 'next/image';
import _ from '@/config/firebase';
import styles from '@/app/page.module.css';
import '@mantine/core/styles.css';
import TeamCard from '@/team-card/TeamCard';


let test_team = [
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
    {name: "qwer", role: "123", profilePicture: "./cat.jpeg",},
    {name: "asdfj", role: "123", profilePicture: "./cat.jpeg",},
    {name: "xcvb", role: "123", profilePicture: "./cat.jpeg",},
    {name: "rtyu", role: "123", profilePicture: "./cat.jpeg",},
    {name: "rtyu", role: "123", profilePicture: "./cat.jpeg",},
    {name: "rtyu", role: "123", profilePicture: "./cat.jpeg",}
  ]

export default function Home() {

    return (
        <main className={styles.main}>

            <TeamCard title={"Testing Title"} team_members={test_team}></TeamCard>

            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.js</code>
                </p>
                <div>
                    <a
                        href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        By{' '}
                        <Image
                            src='/vercel.svg'
                            alt='Vercel Logo'
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <Image className={styles.logo} src='/next.svg' alt='Next.js Logo' width={180} height={37} priority />
            </div>

            <div className={styles.grid}>
                <a
                    href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore starter templates for Next.js.</p>
                </a>

                <a
                    href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
                </a>
            </div>
        </main>
    );
}
