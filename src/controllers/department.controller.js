import Department from "../models/Department.js";
export const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const existDepartment = await Department.findOne({ name });
    if (existDepartment) {
      return res.status(400).json({ msg: "Department allready exist" });
    }
    const department = await Department.create({ name });
    return res
      .status(201)
      .json({ msg: "Department created successfully", department });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDepartment = async (req, res) => {
  try {
    
    const department = await Department.find()
    return res.status(201).json({ msg: "Department fetched successfully", department });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};