import close from "@/assets/images/greyClose.svg";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onSearch?: () => void;
  btnText?: string;
  children?: React.ReactNode;
}

/**
 * Modal 컴포넌트
 *
 * @param props - Modal 컴포넌트의 props
 * @param props.isOpen - 모달이 열려 있는지 여부
 * @param props.onClose - 모달을 닫을 때 호출되는 함수
 * @param props.onSearch - 검색 버튼 클릭 시 호출되는 함수
 * @param props.btnText - 모달 하단 버튼에 표시할 텍스트
 * @param props.children - 모달 내부에 표시할 내용컨텐츠
 * @returns
 */

function Modal(props: ModalProps) {
  const { isOpen, onClose, onSearch, children, btnText } = props;

  if (!isOpen) return null;

  return (
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
  );
}

export default Modal;
