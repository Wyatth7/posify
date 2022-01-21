// There will be many users with different roles within the confines
// of this project. There will be store owners, managers, employees, etc.
// Due to this, there will need to be a different model in which a
// specific resturant is created, and users are added.
import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  businessId: string;
  hireDate: string;
  terminationDate: string;
}

const userModel = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "employee",
  },
  hireDate: {
    type: Date,
    default: Date.now(),
  },
  terminationDate: {
    type: Date,
    default: null,
  },
  businessId: {
    type: String,
    default: null,
  },
});

const UserModel = mongoose.model<IUser>("UserModel", userModel);
export default UserModel;
export { IUser };
