import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostCallActionService } from "./postCallAction.service";
import { PostCallActionControllerBase } from "./base/postCallAction.controller.base";

@swagger.ApiTags("postCallActions")
@common.Controller("postCallActions")
export class PostCallActionController extends PostCallActionControllerBase {
  constructor(protected readonly service: PostCallActionService) {
    super(service);
  }
}
