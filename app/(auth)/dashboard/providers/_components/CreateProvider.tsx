'use client';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure
} from "@heroui/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";

export default function CreateProvider({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex justify-end w-full mb-6">
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<LuPlus size={20} />}
        className="bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 rounded-xl px-5 py-2"
      >
        Añadir Proveedor
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="backdrop-blur-sm"
        placement="center"
        motionProps={{
          variants: {
            enter: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
          },
          transition: { duration: 0.3 },
        }}
      >
        <ModalContent className="rounded-2xl shadow-2xl bg-white p-4">
          {() => (
            <>
              <ModalHeader className="text-2xl font-semibold text-orange-500">
                Crear Proveedor
              </ModalHeader>
              <ModalBody className="py-4">{children}</ModalBody>
              <ModalFooter className="justify-end">
                <Button
                  variant="light"
                  onPress={onOpenChange}
                  className="text-orange-500 hover:text-orange-600"
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
