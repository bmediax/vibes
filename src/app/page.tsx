import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/6HtBTc66rYiAsC3ZczpWDd?utm_source=generator&theme=0"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </main>
  );
}
