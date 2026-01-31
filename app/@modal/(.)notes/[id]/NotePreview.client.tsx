"use client";

import Modal from "../../../../components/Modal/Modal";
import NoteDetailsClient from "../../../notes/[id]/NoteDetails.client";
import { useRouter } from "next/navigation";

export default function NotePreview() {
  const router = useRouter();
  return (
    <Modal onClose={() => router.back()}>
      <NoteDetailsClient />
    </Modal>
  );
}