import ContentDisplay from "@/components/ContentDisplay";

export default function SubContentPage({ params }) {
  const { subcontentId } = params;

  return (
    <div>
      <ContentDisplay id={subcontentId} />
    </div>
  );
}
