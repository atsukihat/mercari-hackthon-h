"use client";

import Link from "next/link";
import {
  HomeIcon,
  ClipboardIcon,
  CheckCircleIcon,
  UserIcon,
} from "lucide-react";

export default function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background">
      <div className="flex items-center justify-around p-2">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 p-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <HomeIcon className="h-5 w-5" />
          <span>ホーム</span>
        </Link>
        <Link
          href="/work"
          className="flex flex-col items-center gap-1 p-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ClipboardIcon className="h-5 w-5" />
          <span>おしごと</span>
        </Link>
        <Link
          href="/tasks"
          className="flex flex-col items-center gap-1 p-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <CheckCircleIcon className="h-5 w-5" />
          <span>やること</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center gap-1 p-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <UserIcon className="h-5 w-5" />
          <span>マイページ</span>
        </Link>
      </div>
    </nav>
  );
}
