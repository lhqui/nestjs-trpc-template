import { INestApplication, Injectable } from '@nestjs/common';
import { z } from 'zod';
import { TrpcService } from '@server/trpc/trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {}

  appRouter = this.trpc.router({
    birth: this.trpc.procedure
      .input(
        z.object({
          age: z.number(),
        }),
      )
      .query(({ input }) => {
        const { age } = input;
        const currentYear = new Date().getFullYear()
        const yearOfBirth = currentYear - age
        return {
          message: `You was born in ${yearOfBirth}`,
        };
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];

