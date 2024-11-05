const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
// const Student = require("../models/studentModel");
// *-------------------
// Home Logic
// *-------------------

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router "
      );
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------
// *-------------------------------
//* User Registration Logic 📝
// *-------------------------------
// 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password, name, email, phone, age, gender, address } =
      req.body;

    // Check if email already exists
    const patientExist = await Patient.findOne({ email });

    if (patientExist) {
      return res.status(400).json({
        message: "Patient with this email already exists",
      });
    }

    // Create a new patient
    const patientCreated = await Patient.create({
      username,
      password,
      name,
      email,
      phone,
      age,
      gender,
      address,
    });

    res.status(201).json({
      msg: "Registration successful",
      // token: await patientCreated.generateToken(),
      patientId: patientCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// In most cases, converting _id to a string is a good practice because it ensures consistency and compatibility across different JWT libraries and systems. It also aligns with the expectation that claims in a JWT are represented as strings.

// *-------------------------------
//* User Login Logic 📝
// *-------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

// *-------------------------------
//* to send user data - User Logic 📝
// *-------------------------------

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
