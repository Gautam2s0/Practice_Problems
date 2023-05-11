import logo from './logo.svg';
import './App.css';
import { LoadingSpinner } from './Components/LoadingSpinner';
import { DragAndDrop } from './Components/DragAndDrop';
import { Rating } from './Components/Rating';
import { Carosuel } from './Components/Carosuel';
import { FileUpload } from './Components/FileUpload';




function App() {
  return (
    <div className="Ap">
      {/* <LoadingSpinner/> */}
      <DragAndDrop/>
      {/* <Rating rating={2.5} /> */}
      {/* <Carosuel/> */}
      {/* <FileUpload/> */}

    </div>
  );
}

export default App;
