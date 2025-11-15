import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
    authorName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    templateName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imgPreviewUrl:{
        type: String,
        required: false
    },
    html: {
        type: String,
        required: true
    },
    css: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default mongoose.model("Template", templateSchema);