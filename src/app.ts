import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/orders/order.routes";
import notFound from "./midleware/notfound";
const app = express();
app.use(express.json());


app.use('/api/products',ProductRoutes)
app.use('/api/orders',OrderRoutes)
app.use(notFound)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
