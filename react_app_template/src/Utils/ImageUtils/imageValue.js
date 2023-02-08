/*
//HTML Return

<input type={"file"} onChange={previewImage} className="uploadImage" accept="image/png, image/jpeg, image/jpg/>
<button onClick={saveImage}>Get Picture</button>
<img src="/" className="imagePreview" alt="" />
*/

const previewImage = (e) => {
  let file = document.querySelector(".uploadImage").files[0];
  let preview = document.querySelector(".imagePreview");
  let reader = new FileReader();
  console.log(file);
  reader.addEventListener(
    "load",
    () => {
      //Convert to Image Base 64
      preview.src = reader.result;
    },
    false
  );
  if (file) {
    reader.readAsDataURL(file);
  }
};

const saveImage = () => {
  //Src Image data
  let imageSrc = document.querySelector(".imagePreview").getAttribute("src");
  console.log(imageSrc);
  return imageSrc;
};

export { previewImage, saveImage };
