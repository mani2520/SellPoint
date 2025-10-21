import express from "express";
import { loginAdmin } from "../controllers/adminController.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin);

router.get("/dashboard", protectAdmin, (req, res) => {
  res.json({ message: `Welcome ${req.admin.name}, this is admin dashboard` });
});

export default router;
