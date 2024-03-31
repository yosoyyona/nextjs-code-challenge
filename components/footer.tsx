import styles from "../styles/footer.module.css"
import { API_URL } from "../app/constants"

async function getCopyright() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  const copyright = json.copyright;
  return copyright;
}

export default async function Footer() {
  const copyright = await getCopyright();
  return (
    <div className={styles.div}>
      &copy; Yonabooks | {copyright}
    </div>
  )
}
