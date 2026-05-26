import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.string().default('4000'),
  HOST: z.string().default('0.0.0.0'),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  CORS_ORIGIN: z.string(),
});

export type Env = z.infer<typeof envSchema>;
