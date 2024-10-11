import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Image, Divider } from "@nextui-org/react";
import CustomLink from "../../../../components/CustomLink";
import mimi from "./DemoImages/mimi.gif";
import Text from "../../../../components/Text";

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
                <div className="justify-center items-center">
                  <Text pbold className="text-left">
                    Articulatory Animation
                  </Text>{" "}
                  <p>Articulators in motion during speech</p>
                </div>
                <Divider></Divider>
                {/* <div className="h-40 bg-darkblue"></div> */}
                <div className="flex flex-row w-full">
                  <div className="w-1/2">
                    <p>Acoustic Waveform</p>
                    <p>Y Position (height) of tongue dorsum</p>
                    <p>Y Position (height) of lower lip</p>
                    <p>
                      Animation of two lips (left) and tongue dorsum (right) in
                      motion while speaking
                    </p>
                  </div>
                  <div className="w-1/2 bg-darkblue">
                    <Image
                      src={mimi}
                      className="object-cover w-full h-full"
                    ></Image>
                  </div>
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
