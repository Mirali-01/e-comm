import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

const Products = ({ items, filteredSearch, setCount }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  // const [count, setCount] = useState(0);

  const filteredItems = items?.products?.filter((item) => {
    return item.title.toLowerCase().includes(filteredSearch.toLowerCase());
  });

  const handleAddToCart = () => {
    setCount();
  };

  // console.log(count);

  return (
    <div className="itemContainer">
      {filteredSearch.length !== 0
        ? filteredItems.map((filteredItem) => {
            return (
              <div className="items" key={filteredItem.id}>
                <img
                  key={filteredItem.id}
                  alt=""
                  onClick={() => {
                    setShowModal(true);
                    setSelectedItem(filteredItem);
                  }}
                  className="itemPic"
                  src={filteredItem.images[0]}
                />
                <h3>{filteredItem.title}</h3>

                <p>${filteredItem.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            );
          })
        : items?.products?.map((item) => {
            return (
              <div className="items" key={item.id}>
                <img
                  alt=""
                  key={item.id}
                  onClick={() => {
                    setShowModal(true);
                    setSelectedItem(item);
                  }}
                  className="itemPic"
                  src={item.images[0]}
                />
                <h3>{item.title}</h3>

                <p>${item.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            );
          })}
      {showModal &&
        createPortal(
          <ModalContent
            item={selectedItem}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </div>
  );
};

export default Products;
