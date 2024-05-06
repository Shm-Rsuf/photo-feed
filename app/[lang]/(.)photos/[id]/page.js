import Modal from "@/components/Modal";
import PhotoDetailsPage from "@/components/PhotoDetailsPage";

const PhotoModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetailsPage id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoModal;
