import { z } from "zod";

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10)
})

export default schema
