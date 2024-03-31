import styles from "../../styles/about.module.css"

export const metadata = {
  title: 'About',
}

export default function About() {
  return (
    <div className={styles.wrapper}>
      <h1>ABOUT US</h1>
      <h3>Welcome to the explorer for The New York Times Best Sellers</h3>
      <hr /><hr />
      <h4>You can navigate to our GitHub from the footer.</h4>
      <hr /><hr />
      <p>🎨The color palette for this website is inspired from Seoul Jazz Festival 2018🎨</p>
    </div>
  )
}
