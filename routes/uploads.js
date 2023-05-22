const express = require("express");
const cloudinary = require("cloudinary").v2;
const router = express.Router();

cloudinary.config({
  cloud_name: "du9k8wvu9",
  api_key: "371484133158285",
  api_secret: "DIb6QUlSoIMr9W0mBxhjhpvc7h0",
});

router.get("/", async (req, res) => {
  res.json({ msg: "Upload work" });
});

router.post("/cloud1", async (req, res) => {
  try {
    const myFile = req.files.myFile;
    if (myFile) {
      const data = await cloudinary.uploader.upload(myFile.tempFilePath, {
        unique_filename: true,
      });
    }
    //console.log(myFile);
    res.json({ msg: "file sended" });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
