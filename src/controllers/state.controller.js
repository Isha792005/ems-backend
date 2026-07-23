import State from "../models/State.js"

export const createstate = async (req, res) => {
    try {
        const {name}=req.body
        const state = await State.create({ name })
        if (!state) {
            return res.status(400).json("State not found")
        }
        return res.status(201).json("State created successfully")
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
}

export const getState = async (req, res) => {
    try {
        const state = await State.find()
        if (!state) {
            return res.status(400).json("State not found")
        }
        return res.status(200).json({msg:"State found successfully",state})
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
}