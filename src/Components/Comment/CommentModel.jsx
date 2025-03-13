import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

const CommentModel = ({ onClose, isOpen }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          {/* Your content here */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CommentModel;
