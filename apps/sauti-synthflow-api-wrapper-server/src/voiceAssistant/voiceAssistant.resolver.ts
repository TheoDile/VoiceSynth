import * as graphql from "@nestjs/graphql";
import { VoiceAssistantResolverBase } from "./base/voiceAssistant.resolver.base";
import { VoiceAssistant } from "./base/VoiceAssistant";
import { VoiceAssistantService } from "./voiceAssistant.service";

@graphql.Resolver(() => VoiceAssistant)
export class VoiceAssistantResolver extends VoiceAssistantResolverBase {
  constructor(protected readonly service: VoiceAssistantService) {
    super(service);
  }
}
