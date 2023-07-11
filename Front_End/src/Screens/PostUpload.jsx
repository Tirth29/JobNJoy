import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch } from "react-redux";
import { uploadPost } from "../reducer/Actions/UserAction";
import { useMessageAndErrorUser } from "../Utils/Hooks";

const PostUpload = ({ navigation }) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState();
  // const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [caption, setcaption] = useState("");
  const [location, setlocation] = useState("");
  const loading = useMessageAndErrorUser(navigation, dispatch, "post");
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };
  // const onDrop = (acceptedFiles) => {
  //   setPhoto(URL.createObjectURL(acceptedFiles[0]));
  // };

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // const handleCropChange = (crop) => {
  //   setCrop(crop);
  // };
  // const handleCropComplete = async (crop) => {
  //   const croppedImageUrl = await getCroppedImg(photo, crop);
  //   // setPhoto(croppedImageUrl);
  // };

  // const getCroppedImg = (image, crop) => {
  //   return new Promise((resolve) => {
  //     const canvas = document.createElement("canvas");
  //     const scaleX = image.naturalWidth / image.width;
  //     const scaleY = image.naturalHeight / image.height;
  //     const ctx = canvas.getContext("2d");

  //     canvas.width = crop.width;
  //     canvas.height = crop.height;

  //     ctx.drawImage(
  //       image,
  //       crop.x * scaleX,
  //       crop.y * scaleY,
  //       crop.width * scaleX,
  //       crop.height * scaleY,
  //       0,
  //       0,
  //       crop.width,
  //       crop.height
  //     );

  //     canvas.toBlob((blob) => {
  //       resolve(URL.createObjectURL(blob));
  //     }, "image/jpeg");
  //   });
  // };
  const handlecaptionChange = (event) => {
    setcaption(event.target.value);
  };

  const handleLocationChange = (event) => {
    setlocation(event.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("location", location);
    formData.append("file", photo);
    console.log(photo)
    dispatch(uploadPost(formData));
    // Reset the state
    // setPhoto(null);
    // setcaption("");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form>
        {/* <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-md border-2 border-gray-400"> */}
        <input
          type="file"
          required
          onChange={handleProfilePicChange}
          className="mt-72 ml-20"
        />
        {/* <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upload
          </button> */}
        {/* </div> */}
        {/* {photo && (
        <ReactCrop
          src={photo}
          crop={crop}
          onChange={handleCropChange}
          onComplete={handleCropComplete}
          className="mt-5"
        />
      )} */}

        <input
          type="text"
          placeholder="Add a location..."
          name="location"
          value={location}
          onChange={handleLocationChange}
          className="mt-5 w-64 p-2 border border-gray-400 rounded-md"
        />

        <input
          type="text"
          placeholder="Add a caption..."
          name="caption"
          value={caption}
          onChange={handlecaptionChange}
          className="mt-5 w-64 p-2 border border-gray-400 rounded-md"
        />

        <input
          type="submit"
          className="w-36 mt-10 h-12 rounded-full bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 text-white font-bold"
          value="Submit"
          onClick={handleUpload}
        />
      </form>
    </div>
  );
};

export default PostUpload;
