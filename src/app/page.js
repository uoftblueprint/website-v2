import Image from "next/image";
import _ from "@/config/firebase";
import styles from "@/app/page.module.css";
import { MantineProvider } from "@mantine/core";
import Banner from "@/components/Banner/Banner";

export default function Home() {
    return (
        <MantineProvider>
            <Banner title="a" text="b" button={{ text: "a", link: "a" }} />
        </MantineProvider>
    );
}
