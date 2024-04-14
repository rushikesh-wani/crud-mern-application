import user from "../models/user.model.js";

//API for creating the new user
export const create = async (req, res) => {
  try {
    const userData = new user(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "User data is empty" });
    }

    const savedData = await userData.save();
    res.status(200).json({ msg: "User created successfully..." });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// API for fetching all the user from dataBase;
export const getAll = async (req, res) => {
  try {
    const userData = await user.find();

    if (!userData) {
      return res.status(404).json({ msg: "Users not found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// API for fetching user by _id
export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await user.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User does not exists!" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// API for updating user details
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await user.findById(id);
    if (!userExist) {
      return res.status(401).json({ msg: "user not found" });
    }
    const updateddata = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "User details updated successfully..." });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log("failed to make api request:)");
  }
};

// Delete User details API
export const Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await user.findById(id);
    if (!userExist) {
      return res.status(401).json({ msg: "user not found" });
    }

    await user.findByIdAndDelete(id);
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log("failed to make delete api request:)");
  }
};
