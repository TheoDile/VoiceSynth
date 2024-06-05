import { VoiceAssistantWhereInput } from "./VoiceAssistantWhereInput";
import { VoiceAssistantOrderByInput } from "./VoiceAssistantOrderByInput";

export type VoiceAssistantFindManyArgs = {
  where?: VoiceAssistantWhereInput;
  orderBy?: Array<VoiceAssistantOrderByInput>;
  skip?: number;
  take?: number;
};
