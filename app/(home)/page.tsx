import Link from "next/link";
import styles from "../../styles/home.module.css"
import { API_URL, IList } from "../constants";

export const metadata = {
  title: 'Home',
}

async function getLists() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  const lists : IList[] = json.results
  return lists;
}
export default async function HomePage() {
  const lists = await getLists();
  return (
    <div className={styles.wrapper}>
      <h1>Explore The New York Times Best Sellers by List</h1>
      <div className={styles.container}>
        {lists.map((list) => (
          <div key={list.list_name_encoded}>
            <Link prefetch href={`/list/${list.list_name_encoded}`}>
              <h3>{list.list_name}</h3>
            </Link>
            <p>Last update: {list.newest_published_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}