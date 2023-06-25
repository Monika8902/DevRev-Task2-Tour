import Tour from '../models/Tour.js';

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
       data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Please try again.",
    });
  }
};

export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
      const updatedTour = await Tour.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedTour) {
        return res.status(404).json({
          success: false,
          message: "Tour not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Tour updated successfully",
        data: updatedTour,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Failed to update. Please try again.",
      });
    }
  };
  

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(id);
    if (!deletedTour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Tour deleted successfully",
      data: deletedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Please try again.",
    });
  }
};

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const singleTour = await Tour.findById(id).populate("reviews");
    if (!singleTour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Tour retrieved successfully",
      data: singleTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve tour. Please try again.",
    });
  }
};

export const getAllTour = async (req, res) => {
  const page=parseInt(req.query.page);
  try {
    const allTours = await Tour.find({}).populate("reviews")
    .skip(page*8).limit(8);
    res.status(200).json({
      success: true,
      count:allTours.length,
      message:"Successfully retrieved all tours",
      data: allTours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve tours. Please try again.",
    });
  }
};

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, 'i');
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully retrieved tours by search",
      data: tours, // Corrected variable name
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Failed to retrieve tours. Please try again.",
    });
  }
};


export const getFeaturedTour = async (req, res) => {
  try {
    const Tours = await Tour.find({featured:true}).populate("reviews").limit(8);
    res.status(200).json({
      success: true,
      message:"Successfully retrieved all tours",
      data: Tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve tours. Please try again.",
    });
  }
};


//flight count

export const getTourCount =async(req,res)=>
{
  try{
    const tourCount = await Tour.estimatedDocumentCount()

    res.status(200).json({
      success:true,
      data:tourCount
    })
  }catch(err)
  {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve flight count. Please try again.",
    });
    
  }
}