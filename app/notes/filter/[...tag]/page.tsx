import NotesClient from "../../Notes.client";

interface Props {
  params: Promise<{
    tag?: string[];
  }>;
}
export default async function FilteredNotesPage({ params }: Props) {
  const { tag } = await params;

  const currentTag = tag?.[0];

  return (
    <NotesClient tag={currentTag === "all" ? undefined : currentTag} />
  );
}