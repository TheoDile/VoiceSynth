import { PostCallAction as TPostCallAction } from "../api/postCallAction/PostCallAction";

export const POSTCALLACTION_TITLE_FIELD = "id";

export const PostCallActionTitle = (record: TPostCallAction): string => {
  return record.id?.toString() || String(record.id);
};
