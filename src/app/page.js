"use client";
import React from "react";
import _ from "@/config/firebase";
import styles from '@/app/page.module.css';

import TeamCard from '@/team-card/TeamCard';


let test_team = [
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
    {name: "Michael Jia", role: "Product Manager", profilePicture: "/cat.jpeg",},
  ]

export default function Home() {

    return (
        // <main className={styles.main}>
        <div>
            <TeamCard title={"Testing Title"} team_members={test_team}></TeamCard>
        </div>
        // </main>
    );
}
