import { Filter } from "lucide-react";

export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 py-2 bg-white bg-opacity-80 backdrop-blur-sm">
      <h1 className="text-gray-600 flex-grow text-center">動画で探す</h1>
      <button className="absolute right-2 flex items-center gap-1 px-2 py-1 rounded-full border border-gray-300 text-xs">
        <Filter className="w-3 h-3" />
        <span>絞り込み</span>
      </button>
    </div>
  );
}
