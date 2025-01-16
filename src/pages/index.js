import styles from "./index.module.css";
import SimpleSection from "@/components/simple-section";
import CLink from "@/components/clink";

export default function Home() {
    return <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
            <header className={styles.header}>
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="4.36364" cy="18.5455" rx="4.36364" ry="4.36364" fill="#0533FF"/>
                    <ellipse cx="4.36364" cy="4.36364" rx="4.36364" ry="4.36364" fill="#0533FF"/>
                    <ellipse cx="25.6364" cy="4.36364" rx="4.36364" ry="4.36364" fill="#0533FF"/>
                    <ellipse cx="25.6364" cy="18.5455" rx="4.36364" ry="4.36364" fill="#0533FF"/>
                    <ellipse cx="15" cy="14.7273" rx="4.09091" ry="4.36364" fill="#0533FF"/>
                </svg>
            </header>
            <main>
                <SimpleSection title={""}>
                    Hey, ich bin Matteo Mertz, 19 Jahre alt und studiere Mathematik mit Nebenfach Informatik an der Technischen Universität München (TUM). Gerade arbeite ich neben meinem Studium hauptsächlich an der <CLink href={"https://github.com/derdudev/schnupperstunde-mathematik"}>Schnupperstunde Mathematik</CLink>.
                </SimpleSection>
                <SimpleSection title={"Mathematik"}>
                    Ich liebe Mathematik und Logik. Darum studiere ich auch Mathematik im 3. Semester an einer der besten deutschen Hochschulen, die es dafür gibt: Der TU München.
                </SimpleSection>
                <SimpleSection title={"Programmieren & Design"}>
                    Zur Softwareentwicklung gehören zwei Teile: Implementierung und Design. Beide sind gleichermaßen wichtig, um ein Produkt zu einem guten Produkt zu machen. Ins Design habe ich mich dann aber doch etwas mehr verguckt.
                </SimpleSection>
                <SimpleSection title={"Werdegang"}>
                    Wenn dich meine Auszeichnungen, mein ehrenamtliches Engagement oder sonstiges zu meinem bisherigen Werdegang interessiert, dann wirst du auf <CLink href={"https://read.cv/derdu"}>read.cv/derdu</CLink> fündig.
                </SimpleSection>
                <SimpleSection title={"Kontakt"}>
                    Du kannst mich erreichen unter derdu.dev@gmail.com, <CLink href={"https://twitter.com/derdudev"}>@derdudev</CLink> auf Twitter oder <CLink href={"https://www.instagram.com/derdu.dev/"}>@derdu.dev</CLink> auf Instagram.
                </SimpleSection>
            </main>
        </div>
    </div>;
}
