import React, { useState } from "react";
import Picture from "../Assistance/PictureDraged";
import { useDrop } from "react-dnd";
import "../styles/Internetartwork.css";
import Img1 from '../assets/david1.jpg';
import Img2 from '../assets/david2.jpg';
import Img3 from '../assets/david3.jpg';
import Img4 from '../assets/david4.jpg';
import Img5 from '../assets/david5.jpg';
import Img6 from '../assets/david6.jpg';
import Img7 from '../assets/david7.jpg';
import Img8 from '../assets/david8.jpg';



const PictureList = [
  {
    id: 3,
    url: Img3,
  },
  {
    id: 8,
    url: Img8,
  },
  {
    id: 1,
    url: Img1,
  },
  {
    id: 7,
    url: Img7,
  },
  {
    id: 2,
    url: Img2,
  },

  {
    id: 5,
    url: Img5,
  },


  {
    id: 4,
    url: Img4,
  },
  {
    id: 6,
    url: Img6,
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