import { useState } from "react";
import { API_INSTANCE } from "api/axios.instance";
import { toast } from "react-toastify";

const ImageUploader = ({ onSuccess }) => {
  const [files, setFiles] = useState([]);

  // ** Handlers
  const onChangeHandler = e => {
    setFiles(e.target.files);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!files.length) {
      toast.error("Please select a file");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    API_INSTANCE.post("/upload/images", formData)
      .then(res => {
        toast.success("Upload Success");
        onSuccess(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="drag-area">
        <div className="icon">
          <i className="fas fa-cloud-upload-alt"></i>
        </div>
        <header>Drag & Drop to Upload File</header>
        <span>OR</span>
        <input type="file" multiple className="custom-file-input" onChange={onChangeHandler} />
      </div>
      <button className="upload-btn">Upload</button>
    </form>
  );
};

export default ImageUploader;
