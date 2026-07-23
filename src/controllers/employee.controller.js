import Employee from "../models/Employee.js"

export const addEmployee = async (req, res) => {
  try {
    const { name, email, phone, gender, department, state, city, pincode, address, isPermanent } = req.body;
    const profilePicture = req.file ? req.file.path : " ";
    const employee = await Employee.create({profilePicture,name,email,phone,gender,department,state,city,pincode,address,isPermanent,
    });

    if (!employee) {
      return res.status(400).json("Employee not created")
    }

    return res.status(201).json({ msg: "Employee created successfully" , employee});
  } catch (error) {
    return res.status(500).json("Interal server error")
    
  }
}

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find().populate("department","name").populate("state","name").populate("city","name")
    if (!employee) {
      return res.status(400).json("Employee not found")
    }
    return res.status(200).json({ msg: "Employee find successfully" , employee});
  } catch (error) {
    return res.status(500).json("Internal server errror")
  }
}

export const getbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(400).json("Employee not found");
    }
    return res
      .status(200)
      .json({ msg: "Employee find successfully", employee });
  } catch (error) {
    return res.status(500).json("Internal server errror");
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(400).json("Employee not found");
    }
    return res
      .status(200)
      .json({ msg: "Employee deleted", employee });
  } catch (error) {
    return res.status(500).json("Internal server errror");
  }
};

export const editEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      department: req.body.department,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
      address: req.body.address,
      isPermanent: req.body.isPermanent,
    };

    // if new image is uploaded
    if (req.file) {
updateData.profilePicture = req.file.path;    }

    const employee = await Employee.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!employee) {
      return res.status(404).json({
        msg: "Employee not found",
      });
    }

    return res.status(200).json({
      msg: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: "Internal server error",
      error: error.message,
    });
  }
};

