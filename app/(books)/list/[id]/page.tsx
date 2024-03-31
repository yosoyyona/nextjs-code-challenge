import Link from "next/link";
import { API_URL, IParams, IBook } from "../../../constants";
import styles from "../../../../styles/list.module.css"

export async function generateMetadata({ params: { id } }: IParams) {
  const res = await getBooks(id)
  return {
    title: res.results.list_name,
  }
}

async function getBooks(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
}

export default async function BookDetail({ params: { id } } : IParams) {
  const res = await getBooks(id);
  const books : IBook[] = res.results.books
  const shopBtn = (book: IBook, shopName: string) => {
    const shop = book.buy_links.find(shop => shop.name === shopName);
    if(shop) {
      return (
        <Link href={shop.url} target="_blank" >
          <svg width="16" height="16" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>{shopName}
        </Link>
      )
    }
  }
  return (
    <div className={styles.wrapper}>
      <h1>{res.results.list_name}</h1>
      <div className={styles.container}>
        {books.map((book) => (
          <div className={styles.item} key={book.primary_isbn10}>
            <img src={book.book_image} alt={book.title} />
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <h5>
              {shopBtn(book, 'Amazon')}&nbsp;
              {shopBtn(book, 'Apple Books')}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}