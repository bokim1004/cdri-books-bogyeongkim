export interface searchData {
  documents: documentType[];
  meta: metaType;
}

interface documentType {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  url: string;
  translators: string[] | number[];
}

interface metaType {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
}
