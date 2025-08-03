import close from "@/assets/images/greyClose.svg";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onSearch?: () => void;
  title?: string;
  btnText?: string;
  children?: React.ReactNode;
}

function Modal(props: ModalProps) {
  const { isOpen, onClose, onSearch, children, btnText } = props;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden z-10 bg-black/50"
      onClick={onClose}
    >
      <div className="w-[360px] h-[160px] flex items-center justify-end">
        <div
          className="bg-white p-7 rounded-lg shadow-[0px_4px_14px_6px_#97979726] w-full max-w-md  relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end items-center mb-3">
            <img src={close} onClick={onClose} />
          </div>

          {children}
          <button
            className="w-full rounded-[8px] h-[36px] bg-primary text-white font-medium text-body2"
            onClick={onSearch}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
