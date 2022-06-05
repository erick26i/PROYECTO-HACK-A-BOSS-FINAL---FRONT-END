import { useModal } from '../../hooks/ModalContext'
import './Modal.css'

function Modal({ children }) {
  const [, setModal] = useModal()
  return (
    <div className="modal-bg">
      <div className="modal-fg" onClick={e => e.stopPropagation()}>
      <p onClick={() => setModal(null)}>x</p>
        {children}
      </div>
    </div>
  )
}

export default Modal