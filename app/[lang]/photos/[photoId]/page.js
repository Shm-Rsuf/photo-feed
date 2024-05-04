import PhotoDetailsPage from "@/components/PhotoDetailsPage";

const page = ({ params: { photoId, lang } }) => {
  return <PhotoDetailsPage id={photoId} lang={lang} />;
};

export default page;
