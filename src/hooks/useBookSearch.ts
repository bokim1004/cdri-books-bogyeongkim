import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async (query: string) => {
  try {
    const response = await axios.get(import.meta.env.VITE_BOOK_API_URL!, {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
      },
      params: {
        query,
      },
    });
    return response.data.documents;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

export const useBookSearch = (query: string) => {
  return useQuery({
    queryKey: ["bookSearch", query],
    queryFn: () => fetchBooks(query),
    enabled: !!query,
  });
};
