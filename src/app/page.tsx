import React from "react";
import { ConfirmationModal } from "./components/confirmation-modal";

export default function Page() {
  return (
    <div className="relative">
      <main className="p-4"></main>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <ConfirmationModal />
      </div>
    </div>
  );
}
