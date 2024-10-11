import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import CustomLink from "../../../../components/CustomLink";
import slowcords from "./DemoImages/slowcords.gif";

const VocalFold = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CustomLink onPress={onOpen}>animation of vocal fold</CustomLink>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-center items-center">
                  <Image src={slowcords}></Image>
                </div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default VocalFold;
