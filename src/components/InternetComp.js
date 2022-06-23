import React, { useState } from "react";
import Picture from "../Assistance/PictureDraged";
import { useDrop } from "react-dnd";
import "../styles/Internetartwork.css";
import Img1 from '../assets/art1.png';
import Img2 from '../assets/art2.jpg';
import Img3 from '../assets/art3.png';


const PictureList = [
  {
    id: 1,
    url: Img1,
  },
  {
    id: 2,
    url: Img2,
  },
  {
    id: 3,
    url: Img3,
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;