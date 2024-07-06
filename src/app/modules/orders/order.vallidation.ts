

import { z } from "zod";
const orderValidationSchema = z.object({
    quantity: z.number(),
    price: z.number(),
    email: z.string().email(),
    productId: z.string(),
  });
  export  default orderValidationSchema