import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();
const port = 8800;

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server Running Successfully on port ${port}`);
});
