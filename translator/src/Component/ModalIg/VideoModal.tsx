
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

const VideoModal = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader> </ModalHeader>
        <ModalBody>
          <div className="space">
            <p className="text-base">
             
            </p>
            <p className="base">
              
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}></Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>

          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default VideoModal;