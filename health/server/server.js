require("dotenv").config();
const doctorModel = require("./models/doctorModel");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
const Patient = require("./models/patientModel");
const connectDb = require("./utils/db");
// const authControllers = require("./controllers/auth-controller");
const corsOptions = {
  // origin: "http://localhost:5173",
  origin: (origin, callback) => {
    // Check if the origin is allowed
    const allowedOrigins = [
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:4173",
      "https://thapatechnical.site",
      "https://www.thapatechnical.site",
    ];
    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed ? origin : false);
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.post("/api/v1/auth/registerdoctor", async (req, res) => {
  try {
    const { name, qualification, address, phone, email, specialization } =
      req.body;

    console.log(name, qualification, address, phone, email, specialization);
    if (!name) {
      return res.status(400).send({ msg: "Name is required!" });
    }
    if (!qualification) {
      return res.status(400).send({ msg: "qualification is required!" });
    }
    if (!address) {
      return res.status(400).send({ msg: "address. is required!" });
    }
    if (!phone) {
      return res.status(400).send({ msg: "phone is required!" });
    }
    if (!email) {
      return res.status(400).send({ msg: "email is required!" });
    }
    if (!specialization) {
      return res.status(400).send({ msg: "specialization is required!" });
    }
    const user = await doctorModel.findOne({ email: email });

    if (user) {
      return res.status(200).send({
        success: false,
        msg: `User with the username ${email} already exists`,
      });
    }

    const newUser = await new doctorModel({
      name,
      qualification,
      address,
      phone,
      email,
      specialization,
    }).save();

    res.status(201).send({
      success: true,
      msg: "User registered successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
});
app.get("/api/v1/auth/search-doctors", async (req, res) => {
  const query = req.query.query;

  try {
    const doctors = await doctorModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
        { qualification: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.post("/registering", async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      username,
      password,
      name,
      email,
      phone,
      age,
      gender,
      medicalHistory,
    } = req.body;

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
      medicalHistory,
    });
    res.status(201).json({
      msg: "Registration successful",
      token: await patientCreated.generateToken(),
      patientId: patientCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the patient based on username
    const patient = await Patient.findOne({ username });

    if (!patient) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Validate password
    const isPasswordValid = await patient.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate and send JWT token
    const token = await patient.generateToken();

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// app.get("");
const PORT = 5001;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
