import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Lorem,
  useDisclosure,
} from '@chakra-ui/react';

import React, { useEffect } from 'react';

const InfoModal = ({ result }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      {/* <Button onClick={onOpen}>Trigger modal</Button> */}

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="md">
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody p={10} textAlign="center">
            {result}
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default InfoModal;
