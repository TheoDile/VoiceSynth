import { VoiceAssistant as TVoiceAssistant } from "../api/voiceAssistant/VoiceAssistant";

export const VOICEASSISTANT_TITLE_FIELD = "id";

export const VoiceAssistantTitle = (record: TVoiceAssistant): string => {
  return record.id?.toString() || String(record.id);
};
