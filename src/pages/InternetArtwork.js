import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "../components/InternetComp";

function InternetArtwork() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="InternetArtwork">
        <DragDrop />
      </div>
      
    </DndProvider>
    
  );
}

export default InternetArtwork;