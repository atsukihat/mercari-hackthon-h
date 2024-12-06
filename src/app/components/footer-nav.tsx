"use client";

import Link from "next/link";
import {
  HomeIcon,
  SearchIcon,
  ClipboardIcon,
  CheckCircleIcon,
  UserIcon,
} from "lucide-react";

export default function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="flex w-full">
        <Link
          href="/"
          className="flex flex-1 flex-col items-center justify-center py-2 text-xs text-gray-400"
        >
          <HomeIcon className="h-6 w-6 mb-1" />
          <span>ホーム</span>
        </Link>
        <Link
          href="/search"
          className="flex flex-1 flex-col items-center justify-center py-2 text-xs text-black"
        >
          <SearchIcon className="h-6 w-6 mb-1" />
          <span>探す</span>
        </Link>
        <Link
          href="/work"
          className="flex flex-1 flex-col items-center justify-center py-2 text-xs text-gray-400"
        >
          <ClipboardIcon className="h-6 w-6 mb-1" />
          <span>お仕事</span>
        </Link>
        <Link
          href="/tasks"
          className="flex flex-1 flex-col items-center justify-center py-2 text-xs text-gray-400"
        >
          <CheckCircleIcon className="h-6 w-6 mb-1" />
          <span>やること</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-1 flex-col items-center justify-center py-2 text-xs text-gray-400"
        >
          <UserIcon className="h-6 w-6 mb-1" />
          <span>マイページ</span>
        </Link>
      </div>
    </nav>
  );
}
