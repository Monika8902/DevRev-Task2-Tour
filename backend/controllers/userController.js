import User from '../models/User.js';


export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Please try again.",
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Please try again.",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const singleUser = await User.findById(id);
    if (!singleUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: singleUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user. Please try again.",
    });
  }
};

export const getAllUser = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const allUsers = await User.find({}).skip(page * 8).limit(8);
    res.status(200).json({
      success: true,
      count: allUsers.length,
      message: "Successfully retrieved all users",
      data: allUsers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve users. Please try again.",
    });
  }
};
