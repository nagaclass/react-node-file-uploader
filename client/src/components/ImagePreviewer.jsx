import END_POINTS from "api/endpoints";

const ImagePreviewer = ({ files }) => {
  if (!files.length) {
    return null;
  }

  return files.map((file, idx) => (
    <img
      key={idx}
      className="image-thumbnails"
      src={`${END_POINTS.base}/${file.filename}`}
      alt={file.originalname}
    />
  ));
};

export default ImagePreviewer;
