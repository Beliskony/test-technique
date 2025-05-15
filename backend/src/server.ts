import connectDB from "./config/database";
import express from "express";

import dotenv from "dotenv";
import { UserRouter } from "./routes/User.route";
import { TransactionRouter } from "./routes/Transaction.route";
import { TYPES } from "./config/TYPES";
import { container } from "./config/container";

dotenv.config();
const app = express();

app.use(express.json());


//injection
const userRouter = container.get<UserRouter>(TYPES.UserRouter)
const transactionRouter = container.get<TransactionRouter>(TYPES.TransactionRouter)


//les routes
app.use("/api", userRouter.router)
app.use("/api", transactionRouter.router)

const startServer = async () => {
  const PORT =process.env.PORT||5000;
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
}

startServer();