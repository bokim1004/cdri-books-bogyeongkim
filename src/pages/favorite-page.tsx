import { useSearchStore } from "../store/useSearchStore";

function FavoritePage() {
  const { likedBooks } = useSearchStore();
  console.log("likedBook", likedBooks);
  return <div className="flex flex-col  h-screen font-display"></div>;
}

export default FavoritePage;
