const express = require("express");
const router = express.Router();
const QRcode = require("qrcode");

const generateQRFile = async (data) => {
  const path = `public/images/${data.lastname}-${data.dob}-${data.timestamp}.png`;

  try {
    await QRcode.toFile(path, JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return { error: true, msg: error };
  }

  return path;
};

router.get("/", async function (req, res, next) {
  res.status(200).json({ success: true });
});

router.post("/", async function (req, res, next) {
  const fileCreated = await generateQRFile(req.body);

  if (fileCreated.error)
    return res.status(500).json({ error: fileCreated.msg });

  return res.status(200).json({
    msg: `${fileCreated} created!`,
    filepath: fileCreated.substring(7),
  });
});

module.exports = router;
