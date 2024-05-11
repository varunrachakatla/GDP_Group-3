const Vendor = require('../models/Vendor');

module.exports = {
  addVendor: async (vendorData) => {
    try {
      return await Vendor.insertMany(vendorData);
    } catch (error) {
      console.error("Error adding vendors:", error);
      throw new Error('Failed to add vendors to the database');
    }
  },
  // Other vendor-related controller functions...
};
// Function to find the nearest vendor based on user's current geopoint
const findNearestVendor = async (req, res) => {
  try {
    // Extract user's current geopoint from request body
    const { latitude, longitude, miles, vendor_types } = req.body;

    const pipeline = [
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [longitude, latitude] },
          distanceField: 'distance',
          spherical: true ,       
        }
      },
      {
        $match: {
          distance: { $lte: miles  * 1609.34 } // Convert miles to meters (1 mile = 1609.34 meters)
        }
      }
    ]
    // Conditionally add vendor_type filter to the pipeline
    if (vendor_types.length !== 0) {
      pipeline.push({
        $match: {
          vendor_type: { $in: vendor_types }
        }
      });
    }

    // Find the nearest vendor using $geoNear aggregation
    const nearestVendor = await Vendor.aggregate(pipeline);


    // Check if a nearest vendor is found
    if (nearestVendor.length === 0) {
      return res.status(404).json({ message: 'No nearest vendor found' });
    }

    // Return the nearest vendor
    res.status(200).json({ nearestVendor: nearestVendor[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller method to insert vendors' data with geopoints
const insertVendorWithGeopoint = async (req, res) => {
  try {

    // // Extract vendor data including geopoint from request body
    // const { vendorData } = req.body;
    // console.log(JSON.stringify(req.body))
    // // Create a new vendor instance
    const newVendor = new Vendor(req.body);

    // Save the vendor to the database
    await newVendor.save();

    res.status(201).json({ message: 'Vendor data with geopoint inserted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { findNearestVendor, insertVendorWithGeopoint };
