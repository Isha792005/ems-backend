import mongoose from "mongoose";
const stateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true,
        unique:true,
    }
}, {
    timetapmps:true
})
const State = mongoose.model("State", stateSchema)
export default State;