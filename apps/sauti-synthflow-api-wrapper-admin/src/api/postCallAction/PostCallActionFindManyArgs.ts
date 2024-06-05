import { PostCallActionWhereInput } from "./PostCallActionWhereInput";
import { PostCallActionOrderByInput } from "./PostCallActionOrderByInput";

export type PostCallActionFindManyArgs = {
  where?: PostCallActionWhereInput;
  orderBy?: Array<PostCallActionOrderByInput>;
  skip?: number;
  take?: number;
};
