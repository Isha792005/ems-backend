import City from "../models/City.js"

export const createCity = async (req, res) => {
    try {
        const { name, state } = req.body
        const createcity = await City.create({ name, state })
        if (!createcity) {
            return res.status(400).json("City not found")
        }
        return res.status(201).json("city created succesfully")
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
}

export const getCity = async (req, res) => {
    try {
        const city = await City.find().populate("state")
        if (!city) {
            return res.status(400).json("city not found")
        }
        return res.status(200).json({ msg: "city find successfully" ,city});
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
}

export const getIdCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findById(id);
    if (!city) {
      return res.status(400).json("city not found");
    }
    return res.status(200).json({ msg: "city find successfully", city });
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
}

export const getCityByState = async (req, res) => {
    try {
        const { stateId } = req.params
        const cities = await City.find({ state: stateId })
        return res.ststus(200).json("Cities")
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}