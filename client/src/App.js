import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Components
import ImageUploader from "components/ImageUploader";
import ImagePreviewer from "components/ImagePreviewer";

const App = () => {
  const [files, setFiles] = useState([]);
  const onSuccess = savedFiles => {
    setFiles(savedFiles);
  };

  return (
    <main className="container">
      <ToastContainer />
      <ImageUploader onSuccess={onSuccess} />
      <ImagePreviewer files={files} />
    </main>
  );
};

export default App;
