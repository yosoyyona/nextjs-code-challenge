export const API_URL = "https://books-api.nomadcoders.workers.dev";

export interface IList {
  list_name: string,
  display_name: string,
  list_name_encoded: string,
  oldest_published_date: string,
  newest_published_date: string,
  updated: string,
}

export interface IParams {
  params: { id: string }
}

export interface IBuyLinks {
  name: string,
  url: string
}

export interface IBook {
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
  buy_links: IBuyLinks[],
  book_uri: string,
}