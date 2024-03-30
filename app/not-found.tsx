import styles from "../styles/not-found.module.css"

export const metadata = {
  title: "Not found",
}

export default function NotFound() {
  return (
    <div className={styles.div}>
      <h1>Not Found!</h1>
    </div>
  )
}