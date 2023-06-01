import mongoose, { mongo } from "mongoose";

const courseModel = new mongoose.Schema({
    id: {
        type: String
    },
    type: {
        type: String,
        required: [true, "Campo de tipo é obrigatório."]
    },
    img : {
        type: String,
        required: [true, "Campo de imagem é obrigatório."]
    },
    name: {
        type: String,
        required: [true, "Campo de nome é obrigatório."]
    },
    describe: {
        type: String,
        required: [true, "Campo de descrição é obrigatório."]
    },
    hours: {
        type: Number,
        required: [true, "Campo de horas é obrigatório."]
    },
    status: {
        type: Boolean,
        required: [true, "Campo de status é obrigatório."]
    }
})

const Course = mongoose.model("courses", courseModel);
export default Course;