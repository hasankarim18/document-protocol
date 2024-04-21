import ContentDisplay from "@/components/ContentDisplay";

const ContentPage = ({ params: { contentid } }) => {
  return (
    <div>
      <ContentDisplay id={contentid} />
    </div>
  );
};

export default ContentPage;
