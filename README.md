# 프로젝트 개요

kakao book search api를 활용하여 도서를 검색하고, 마음에 드는 책을 찜하기 목록에 저장할 수 있는 간단한 웹페이지입니다.
찜하기 목록, 검색 기록은 로컬 스토리지에 저장되어 재방문 시에도 확인할 수 있습니다.

## 실행 방법 및 환경 설정

1) 저장소를 클론합니다.
2) 패키지를 설치합니다.
> pnpm을 사용함
```js
    npm install -g pnpm
```
3) 환경변수를 설정합니다.
`.env.local`파일을 생성합니다.
```js
VITE_BOOK_API_URL=https://dapi.kakao.com/v3/search/book
VITE_KAKAO_REST_API_KEY=발급받은_API_KEY
```
4) 개발 서버를 실행합니다.
```js
pnpm dev
```
실행 후 `http://localhost:5173/`에 접속합니다.

### vercel을 이용해 배포한 주소
https://cdri-books-bogyeongkim.vercel.app/
- 여기서 확인해보실 수 있습니다.

## 폴더 구조 

| 폴더 / 파일 | 설명 |
|-------------|------|
| **components/** | UI 컴포넌트 모음 |
| ├── **book/** | 책 관련 컴포넌트 |
| │ ├── book-detail.tsx | 상세보기 클릭 시 나오는 도서 상세 UI |
| │ ├── book-info.tsx | 도서 검색 결과 리스트 UI |
| │ └── book-item.tsx | 개별 책 아이템 UI |
| ├── **common/** | 공용 UI 컴포넌트 |
| │ ├── book.tsx | 책 정보 담은 컴포넌트 |
| │ ├── button.tsx | 버튼 컴포넌트 |
| │ ├── header.tsx | 헤더 컴포넌트 |
| │ ├── input.tsx | 입력창 컴포넌트 |
| │ ├── modal.tsx | 모달 컴포넌트 |
| │ └── pagination.tsx | 페이지네이션 컴포넌트 |
| ├── **search/** | 검색 관련 컴포넌트 |
| │ ├── book-search.tsx | 도서 검색 부분 UI |
| │ ├── no-searchview.tsx | 검색 결과 없을 경우 UI |
| │ ├── search-form.tsx | 모달 안에 들어가는 검색 폼 |
| │ ├── search-history.tsx | 검색 히스토리 UI |
| │ └── search-input.tsx | 검색 입력창 |
| **hooks/** | 커스텀 훅 |
| ├── useBookSearch.ts | 도서 검색 API 호출해 결과 반환하는 훅 |
| ├── useBookToggle.ts | 찜하기,상세보기 관련 로직을 담은 훅 |
| ├── usePagination.ts | 페이지네이션 훅 |
| └── useSearchInput.ts | 검색 입력 훅 |
| **pages/** | 페이지 컴포넌트 |
| ├── favorite-page.tsx | 찜한 책 페이지 |
| └── search-page.tsx | 검색 페이지 |
| **store/** | 상태 관리 |
| ├── useFavoriteStore.ts | 찜한 책 상태 |
| ├── useSearchHistoryStore.ts | 검색 히스토리 상태 |
| └── useSearchStore.ts | 검색 상태 |
| **types/** | 타입 정의 |
| └── search.ts | 검색 관련 타입 |

- `pages`는 크게 검색페이지, 찜한 책 페이지로 나누었습니다.
-  `common`폴더에는 재사용할 수 있는 공통적으로 사용되는 컴포넌트를 구분했습니다.
- `book`폴더에는 도서관련 컴포넌트를 세분화했습니다.
- `search`폴더에는 검색관련 컴포넌트를 세분화했습니다.
- `hooks`폴더에는 api호출,비즈니스 로직을 관심사별로 구분한 hook들을 넣었습니다.
- `store`폴더에는 전역상태 관리를 위한 store를 관심사별로 구분해두었습니다.
- 
## 기술 스택
React.js, TypeScript, React Query, Tailwind CSS, Zustand

## 라이브러리 선택 이유

### 1. pnpm + Vite
개발하게 된 도서검색/찜하기 페이지가 간단한 구조이지만 빠르고 효율적인 개발을 위해 pnpm,vite를 이용했습니다.
`pnpm`은 중복 의존성을 제거하고, 패키지 설치 속도가 빨라 시간을 절약하게 해주었고, `vite`는 필요할 때만 모듈을 로드하는 구조라 빌드 결과가 가볍습니다.<br/>
 CRA(Create React App) 대비 설정이 단순해서 개발 환경을 빠르게 구축하고 기능 개발에 집중할 수 있었습니다.

 ### 2. Tailwind CSS

Tailwind CSS는 클래스 기반 스타일링으로 별도의 CSS파일을 작성할 필요없이 즉시 스타일 적용이 가능하기에 빠르게 UI를 개발할 수 있게 해주기에 사용했습니다.
`index.css`에 공통적으로 사용되는 컬러와 폰트 사이즈를 따로 작성해서 재사용할 수 있게 했습니다.

```js

@theme {
  --color-primary: #4880ee;
  --color-red: #e84118;
  --color-gray: #dadada;
  --color-white: #ffffff;
  --color-black: #222222;
  --color-lightgray: #f2f4f6;
  --color-textPrimary: #353c49;
  --color-textSecondary: #6d7582;
  --color-textSubtitle: #8d94a0;
  --color-textTitle: #1a1e27;

  --text-title1: 24px;
  --text-title2: 22px;
  --text-title3: 18px;
  --text-body1: 20px;
  --text-body2: 14px;
  --text-caption: 16px;
  --text-small: 12px;
  --text-xsmall: 10px;

  --font-display: "Noto Sans KR", sans-serif;
}
```

### 3. Zustand
검색 상태, 검색 기록, 찜 목록 등은 여러 컴포넌트에서 전역적으로 공유해야 하는 데이터였습니다.
Zustand를 선택한 이유는 관심사별 Store를 쉽게 분리하여 독립적으로 관리할 수 있어, 상태 관리 구조를 단순하고 명확하게 유지할 수 있었기 때문입니다.
또한, persist 미들웨어를 사용하면 Local Storage에 손쉽게 상태를 저장하고, 새로고침 후에도 데이터를 유지할 수 있게 해주기 때문입니다.

## 강조하고 싶은 기능

### 1. 검색 기록 관리 (useSearchHistoryStore.ts)

```js
const STORAGE_KEY = "searchHistory";
const MAX_HISTORY = 8;

/** 검색 기록 상태 저장소  */

export const useSearchHistoryStore = create<SearchHistoryState>()(
  persist(
    (set) => ({
      searchHistory: [],

      //검색어 기록 추가
      addSearchHistory: (term) =>
        set((state) => {
          const trimmed = term.trim();
          if (!trimmed) return state;

          const filteredHistory = state.searchHistory.filter(
            (item) => item !== trimmed
          );
          return {
            searchHistory: [trimmed, ...filteredHistory].slice(0, MAX_HISTORY),
          };
        }),
      //검색어 기록 삭제
      removeSearchHistory: (term) =>
        set((state) => ({
          searchHistory: state.searchHistory.filter((item) => item !== term),
        })),

      //검색어 기록 전체 삭제
      clearSearchHistory: () =>
        set({
          searchHistory: [],
        }),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);

```

Zustand persist 미들웨어를 사용하여 검색 기록을 Local Storage에 저장해, 새로고침 후에도 최근 검색어를 유지하고 중복 검색어 제거 및 최대 8개까지 기록 제한하게 하는 기능을 구현했습니다.
검색어 기록 추가뿐만 아니라, 기록삭제 하는 부분까지 한 store안에서 관리할 수 있게 했습니다.


###  2. 도서 찜하기 (useFavoriteStore.ts)
```js
export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      likedBooks: {},
      toggleLikeHeart: (book: documentType) =>
        set((state) => {
          //이미 찜한 책인 경우
          const isLiked = !!state.likedBooks[book.isbn];
          if (isLiked) {
            const updated = { ...state.likedBooks };
            delete updated[book.isbn];
            return {
              likedBooks: updated,
            };
          } else {
            return { likedBooks: { ...state.likedBooks, [book.isbn]: book } };
          }
        }),
    }),
    {
      name: STORAGE_KEY,
    }
  )
);

```
사용자가 책 위에 붙어있는 하트를 클릭하면 Zustand와 persist 미들웨어를 활용해 Local Storage에 저장하여 새로고침 후에도 찜 목록이 유지되도록 구현했습니다.
하트를 다시 클릭해서 디폴트 상태가 되면 찜 목록에 제외되게 했습니다.


