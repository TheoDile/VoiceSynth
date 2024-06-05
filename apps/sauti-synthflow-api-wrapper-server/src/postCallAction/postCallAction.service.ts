import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostCallActionServiceBase } from "./base/postCallAction.service.base";

@Injectable()
export class PostCallActionService extends PostCallActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
