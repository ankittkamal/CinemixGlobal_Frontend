import ActorForm from "../form/ActorForm";
import ModalContainer from "./ModalContainer";

function ActorUpload({ visible, onClose }) {
  return (
    <ModalContainer visible={visible} onClose={onClose} ignoreContainer>
      <ActorForm title="Create New Actor" btnTitle="Create" />
    </ModalContainer>
  );
}

export default ActorUpload;
