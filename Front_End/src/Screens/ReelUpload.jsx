import { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ReactPlayer from "react-player";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadReel } from "../reducer/Actions/UserAction";
import { useMessageAndErrorUser } from "../Utils/Hooks";
import FinalFooter from "../Components/FinalFooter";
const ReelUpload = ({ navigation }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [caption, setcaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const [reel, setReel] = useState();
  const [cat, setCat] = useState("");
  const [category, setCategory] = useState("");
  const handleCategoryChange = (e) => {
    // setCategory(e.target.value);
    if (e.target.value === "funny") {
      setCat("funny");
      setCategory("649eaf4c200d188b6bce8276");
    } else if (e.target.value === "coding") {
      setCat("coding");
      setCategory("649eb264a025b7eaae238863");
    } else if (e.target.value === "cricket") {
      setCat("cricket");
      setCategory("649eb26fa025b7eaae238866");
    } else if (e.target.value === "18+") {
      setCat("18+");
      setCategory("649eb27da025b7eaae238869");
    } else {
      setCat("funny");
      setCategory("");
    }
  };
  const loading = useMessageAndErrorUser(navigation, dispatch, "refreshment");
  const onDrop = (acceptedFiles) => {
    const reel = acceptedFiles[0];
    console.log("reel: ", reel);
    setReel(reel);
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
  const handleReelChange = (e) => {
    setReel(e.target.files[0]);
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

  const handleUpload = () => {
    // Handle the upload functionality
    console.log({
      category,
      reel,
      caption,
    });
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("file", reel);
    formData.append("category", category);
    dispatch(uploadReel(formData));
    // Reset the state
    setSelectedFile(null);
    setcaption("");
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <button
          className=" mr-80 mb-10 "
          onClick={() => navigate("/refreshment")}
        >
          <AiOutlineRollback className="font-semibold text-4xl text-black h-10" />
        </button>
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-md border-2 border-gray-400">
          {selectedFileUrl ? (
            <ReactPlayer
              url={selectedFileUrl}
              // value={reel}
              // onChange={handleReelChange}
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
        <select
          className="mt-5 w-64 p-2 border border-gray-400 rounded-md"
          value={cat}
          onChange={handleCategoryChange}
        >
          <option value="funny">Funny</option>
          <option value="coding">Coding</option>
          <option value="cricket">Cricket</option>
          <option value="18+">18+</option>
        </select>
        <button
          onClick={handleUpload}
          className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Upload
        </button>
      </div>
      <FinalFooter />
    </>
  );
};

export default ReelUpload;
