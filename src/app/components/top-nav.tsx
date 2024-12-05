import { Filter } from "lucide-react";

export default function TopNav() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white">
      <h1 className="text-gray-600">動画で探す</h1>
      <button className="flex items-center gap-1 px-4 py-1 rounded-full border border-gray-300">
        <Filter className="w-4 h-4" />
        <span className="text-sm">絞り込み</span>
      </button>
    </div>
  );
}
