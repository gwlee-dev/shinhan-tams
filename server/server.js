import express from "express";
import multer from "multer";
import cors from "cors";

const PORT = 4000;
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "dist/");
    },
    filename: (req, file, cb) => {
        let ext = file.originalname.split(".");
        ext = ext[ext.length - 1];
        cb(null, `${Date.now()}.${ext}`);
    },
});

const upload = multer({ storage });
const corsOptions = {
    origin: "*",
    credentials: true,
};

app.use([express.json(), cors(corsOptions), upload.single("upload")]);

app.post("/", (req, res) => {
    try {
        return res.json({
            url: `/${req.file.filename}`,
        });
    } catch (err) {
        res.json({
            error: {
                message: err.message,
            },
        });
    }
});

app.listen(PORT, () =>
    console.log(`Upload Server listening on http://localhost:${PORT}`)
);
