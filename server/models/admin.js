const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
// Static method to create initial admin account
AdminSchema.statics.createInitialAdmin = async function () {
  try {
    const Admin = this;
    // Check if there are any existing admin accounts
    const admin = await Admin.findOne({ isAdmin: true });
    if (admin) {
      console.log('Admin account already exists.');
      return;
    }
    // Create new admin account
    const newAdmin = new Admin({
      username: 'adminuser',
      password: 'admin2023',
      email: 'admin@example.com',
    });
    await newAdmin.save();

    console.log('Admin account created successfully.');
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoose.model('Admin', AdminSchema);
