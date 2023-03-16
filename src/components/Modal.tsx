import '../scss/components/Modal.scss'
type Props={
    children?: string|JSX.Element|JSX.Element[],
    onClose: () => void,
    isVisible: boolean
}

export default function Modal({ children, onClose, isVisible }: Props) {
    if (!isVisible) return null
    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal__header">
                    <h3></h3>
                    <button type='button' onClick={onClose}>close</button>
                </div>
                <div className="modal__content">
                    {children}
                </div>
                <div className="modal__footer"></div>
            </div>
        </div>
    );
}