import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

// 도서 검색 API를 호출하는 함수
const fetchBooks = async (query: string, page: number) => {
  try {
    const response = await axios.get(import.meta.env.VITE_BOOK_API_URL!, {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
      },
      params: {
        query,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

/**
 *
 * @param query - 검색어
 * @param page - 페이지 수
 * query에 따라 도서 검색 API를 호출하여 결과를 반환하는 훅
 */

export const useBookSearch = (query: string, page: number) => {
  return useQuery({
    queryKey: ["bookSearch", query, page],
    queryFn: () => fetchBooks(query, page),
    enabled: !!query,
    placeholderData: keepPreviousData,
  });
};
