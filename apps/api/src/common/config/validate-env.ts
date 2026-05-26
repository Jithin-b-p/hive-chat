import { envSchema } from './env.schema';

export function validateEnv(config: Record<string, unknown>) {
  const parsed = envSchema.safeParse(config);

  if (!parsed.success) {
    console.error('Invalid environment variables');
    console.error(parsed.error.flatten().fieldErrors);

    throw new Error('Environment validation failed');
  }

  return parsed.data;
}
