import { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ReactPlayer from "react-player";
import {AiOutlineRollback} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ReelUpload = () => {
  const navigate = useNavigate();
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [caption, setcaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setSelectedFileUrl(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  const handleCropComplete = async (crop) => {
    const croppedImageUrl = await getCroppedImg(selectedFile, crop);
    setSelectedFile(croppedImageUrl);
  };

  const getCroppedImg = (image, crop) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const ctx = canvas.getContext("2d");

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob));
      }, "image/jpeg");
    });
  };

  const handlecaptionChange = (event) => {
    setcaption(event.target.value);
  };

  const handlelocationChange = (event) => {
    setcaption(event.target.value);
  };

  const handleUpload = () => {
    // Handle the upload functionality
    console.log({
      selectedFile,
      caption,
    });
    // Reset the state
    setSelectedFile(null);
    setcaption("");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <button className=" mr-80 mb-10 " onClick={()=>navigate("/refreshment")} >
        <AiOutlineRollback className="font-semibold text-4xl text-black h-10" />
      </button>
      <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-md border-2 border-gray-400">
        {selectedFileUrl ? (
          <ReactPlayer
            url={selectedFileUrl}
            width="100%"
            height="100%"
            controls
            playing
          />
        ) : (
          <div {...getRootProps()} className="cursor-pointer">
            <input {...getInputProps()} />

            <p className="text-gray-500">
              Drag and drop a video file here, or click to select a file
            </p>
          </div>
        )}
      </div>

      <input
        type="text"
        placeholder="Add a caption..."
        value={caption}
        onChange={handlecaptionChange}
        className="mt-5 w-64 p-2 border border-gray-400 rounded-md"
      />

      <button
        onClick={handleUpload}
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Upload
      </button>
    </div>
  );
};

export default ReelUpload;