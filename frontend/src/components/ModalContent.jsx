import React from "react";

const ModalContent = ({ item, onClose }) => {
  return (
    <div onClick={onClose} className="modal-wrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        <img className="itemPic" src={item.images[0]} />
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <p>{item.description}</p>
        <button type="submit">Add to Cart</button>
      </div>
    </div>
  );
};

export default ModalContent;
