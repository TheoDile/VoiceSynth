import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoiceAssistantService } from "./voiceAssistant.service";
import { VoiceAssistantControllerBase } from "./base/voiceAssistant.controller.base";

@swagger.ApiTags("voiceAssistants")
@common.Controller("voiceAssistants")
export class VoiceAssistantController extends VoiceAssistantControllerBase {
  constructor(protected readonly service: VoiceAssistantService) {
    super(service);
  }
}
