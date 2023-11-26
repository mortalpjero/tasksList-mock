import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { RootState } from "../../slices";
import { setModal } from "../../slices/modalSlice";
import { removeTaskFromState, setTaskToRemove } from "../../slices/tasksSlice";
import { setTaskToEdit } from "../../slices/editTaskSlice";
import { removeTask } from "../../services/api";
import Button from "../Button/Button";
import { ReactComponent as CancelIcon } from "../../images/cancel_icon.svg";
import { ReactComponent as BackIcon } from "../../images/back_icon.svg";
import { ReactComponent as CrossIcon } from "../../images/cross_icon.svg";
import useOutsideClick from "../../utils/useOutsideClick";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const modalType = useSelector((state: RootState) => state.modalsInfo.type);
  const taskToRemove = useSelector((state: RootState) => state.tasksInfo.taskToRemove);

  const handleClickBack = () => {
    dispatch(setModal({ type: 'none' }));
  }

  useOutsideClick(ref, () => {
    if (modalType !== 'none') {
      dispatch(setModal({ type: 'none' }));
    }
  });

  const handlClickAffirmative = () => {
    if (modalType === 'removeTask') {
      if (taskToRemove) {
        removeTask(taskToRemove?.id)
          .catch(() => {
            alert('Error removing the task');
          });
        dispatch(removeTaskFromState({ id: taskToRemove?.id }));
        dispatch(setTaskToRemove(null));
      }
    }

    if (modalType === 'discardChanges') {
      dispatch(setTaskToEdit(null));
    }

    dispatch(setModal({ type: 'none' }));
  }

  const modalContainerClasses = classNames(
    modalType === 'none' ? 'hidden' : 'flex',
    'overflow-y-auto',
    'overflow-x-hidden',
    'fixed',
    'top-0',
    'right-0',
    'left-0',
    'z-50',
    'justify-center',
    'items-center',
    'w-full',
    'md:inset-0',
    'h-full',
    'max-h-full',
    'bg-black',
    'bg-opacity-50',
  )

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={modalContainerClasses}
    >
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-10 w-full max-w-2xl max-h-full">
          <div className="relative bg-blue-50 rounded-lg shadow" ref={ref}>
            <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
              <h3 className="text-xl font-semibold text-gray-900 pr-3">
                {modalType === 'discardChanges' && 'Are you sure you want to discard your changes?'}
                {modalType === 'removeTask' && 'Are you sure you want to remove this task?'}
              </h3>
              <Button variant="actionIcon" type="button" icon={<CrossIcon />} onClick={handleClickBack} />
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500">
                Once you click the red button, there is no way back
              </p>
            </div>
            <div className="flex border-2 p-4 md:p-5 border-t border-gray-200 rounded-b">
              <Button variant="danger" type="button" icon={<CancelIcon />} onClick={handlClickAffirmative}>
                {modalType === 'discardChanges' && 'Discard'}
                {modalType === 'removeTask' && 'Remove'}
              </Button>
              <Button specialClass="ml-4 md:ml-6" variant="primary" type="button" icon={<BackIcon />} onClick={handleClickBack}>Go back</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;
