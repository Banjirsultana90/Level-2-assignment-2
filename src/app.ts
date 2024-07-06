import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/modules/products/product.route";
import { OrderRoutes } from "./app/modules/orders/order.routes";
import notFound from "./app/midleware/notfound";
const app = express();
app.use(express.json());

app.use('/api/products',ProductRoutes)
app.use('/api/orders',OrderRoutes)


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use(notFound)
export default app;
