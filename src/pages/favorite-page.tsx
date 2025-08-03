import { useSearchStore } from "../store/useSearchStore";

function FavoritePage() {
  const { likedBooks } = useSearchStore();
  const count = Object.keys(likedBooks).length;
  const likedBookList = Object.keys(likedBooks).filter((id) => likedBooks[id]);

  console.log("likedBook", likedBooks, likedBookList);
  return (
    <div className="flex flex-col  h-screen font-display border-3 pt-20 items-start mx-48">
      <div className="flex flex-col items-start gap-2">
        <p className="text-textTitle font-bold text-title2">내가 찜한 책</p>
        <div className="flex gap-5 text-textPrimary text-caption font-medium">
          찜한 책
          <p>
            총 <span className="text-primary">{count}</span>건
          </p>
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
