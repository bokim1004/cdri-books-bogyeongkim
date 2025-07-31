import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// 도서 검색 API를 호출하는 함수
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

/**
 *
 * @param query - 검색어
 * query에 따라 도서 검색 API를 호출하여 결과를 반환하는 훅
 */

export const useBookSearch = (query: string) => {
  return useQuery({
    queryKey: ["bookSearch", query],
    queryFn: () => fetchBooks(query),
    enabled: !!query,
  });
};
