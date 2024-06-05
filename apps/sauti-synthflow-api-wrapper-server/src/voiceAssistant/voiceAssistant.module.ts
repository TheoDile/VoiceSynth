import { Module } from "@nestjs/common";
import { VoiceAssistantModuleBase } from "./base/voiceAssistant.module.base";
import { VoiceAssistantService } from "./voiceAssistant.service";
import { VoiceAssistantController } from "./voiceAssistant.controller";
import { VoiceAssistantResolver } from "./voiceAssistant.resolver";

@Module({
  imports: [VoiceAssistantModuleBase],
  controllers: [VoiceAssistantController],
  providers: [VoiceAssistantService, VoiceAssistantResolver],
  exports: [VoiceAssistantService],
})
export class VoiceAssistantModule {}
