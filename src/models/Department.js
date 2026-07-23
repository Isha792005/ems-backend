import mongoose from "mongoose";
const DepartmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true,
        unique:true,
    }
}, {
    timetapmps:true
})
const Department = mongoose.model("Department", DepartmentSchema)
export default Department;