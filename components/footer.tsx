import Link from "next/link";
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
      <Link href="https://github.com/yosoyyona" target="_blank">Yona Park</Link> &nbsp; | &nbsp; {copyright}
    </div>
  )
}
