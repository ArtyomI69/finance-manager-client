import { FC, ReactNode } from "react";
import ReactDom from "react-dom";

import styles from "./Modal.module.css";

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
  );
};

interface BackdropProps {
  onCloseModal: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onCloseModal }) => {
  return <div className={styles.backdrop} onClick={onCloseModal} />;
};

const portalElement = document.getElementById("modal")!;

interface ModalProps extends ModalOverlayProps, BackdropProps {}

const Modal: FC<ModalProps> = ({ onCloseModal, children }) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onCloseModal={onCloseModal} />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
