import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceAssistantServiceBase } from "./base/voiceAssistant.service.base";

@Injectable()
export class VoiceAssistantService extends VoiceAssistantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
