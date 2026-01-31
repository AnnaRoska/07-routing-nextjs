import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{
    slug?: string[];
  }>;
}
export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;

  const currentTag = slug?.[0];

  return (
    <NotesClient tag={currentTag === "all" ? undefined : currentTag} />
  );
}