import {
  Box,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

const BlogDrawer = ({ trigger, content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const blogRef = useRef();

  return (
    <>
      <Button
        ref={blogRef}
        colorScheme="mainBlue"
        onClick={onOpen}
        variant="ghost"
      >
        {trigger}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={blogRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>{trigger}</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>{content}</DrawerBody>
            <DrawerFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant="outline" color="mainBlue.600">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default BlogDrawer;
