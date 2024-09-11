import React, { useEffect } from 'react'
import Button from '../buttons/Button'
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const PopUp = ({message, buttonAcc, isPopUpOpen, onConfirm, closePopup, showCancel = true }) => {

  console.log('Is Pop-up open?', isPopUpOpen);

  useEffect(() => {
    if (isPopUpOpen) {
      document.body.style.position = "fixed";
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    }, [isPopUpOpen]);

  if (!isPopUpOpen) return null;

  const popupContent = (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      
    <div className="flex flex-col justify-center gap-3 items-center w-[16rem] shadow-bigs rounded-cont bg-pink h-auto py-6 border-[0.18rem] border-brown">
    <img src="/img/Ingredients.svg" alt="" />
      <p className="font-raleway text-regu text-center font-semibold px-3">{message}</p>
      <div className="flex flex-col gap-4">
        <Button 
          className="bg-lightlila text-brokenwhite" 
          text={buttonAcc}
          type="button"
          onClick={(e) => { 
            if (onConfirm) onConfirm(e);
            closePopup();
          }}
        />
        {showCancel && (
            <Button 
              className="bg-brokenwhite text-darklila" 
              text="Cancelar"
              type="button"
              onClick={closePopup}
            />
        )}
     
      </div>
    </div>
    </div>
  );

  return ReactDOM.createPortal(popupContent, document.body);
};

PopUp.propTypes = {
  isPopupOpen: PropTypes.bool,
  closePopup: PropTypes.func,
  onConfirm: PropTypes.func,
  message: PropTypes.string,
  showCancel: PropTypes.bool
};

export default PopUp
