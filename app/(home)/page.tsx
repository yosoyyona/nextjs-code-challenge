import Link from "next/link";

export const metadata = {
  title: 'Home',
}

export const API_URL = "https://books-api.nomadcoders.workers.dev";

interface IList {
  list_name: string,
  display_name: string,
  list_name_encoded: string,
  oldest_published_date: string,
  newest: string,
  updated: string,
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
    <div>
      {lists.map((list) => (
        <li key={list.list_name_encoded}>
          <Link href={`/books/${list.list_name_encoded}`}>{list.list_name}</Link>
        </li>
      ))}
    </div>
  );
}