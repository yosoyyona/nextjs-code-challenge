import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";

interface IBook {
  rank: number,
  rank_last_week: number,
  weeks_on_list: number,
  asterisk: number,
  dagger: number,
  primary_isbn10: string,
  primary_isbn13: string,
  publisher: string,
  description: string,
  price: string,
  title: string,
  author: string,
  contributor: string,
  contributor_note: string,
  book_image: string,
  book_image_width: number,
  book_image_height: number,
  amazon_product_url: string,
  age_group: string,
  book_review_link: string,
  first_chapter_link: string,
  sunday_review_link: string,
  article_chapter_link: string,
  isbns: object[],
  buy_links: object[],
  book_uri: string,
}

async function getBooks(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
}

export default async function BookDetail({ id }: { id: string }) {
  const res = await getBooks(id);
  const books : IBook[] = res.results.books
  return (
    <div>
      <h2>{res.results.list_name}</h2>
      {books.map((book) => (
        <li key={book.primary_isbn10}>
          <img src={book.book_image} alt={book.title} />
          <h4>{book.title}</h4>
        </li>
      ))}
    </div>
  )
}