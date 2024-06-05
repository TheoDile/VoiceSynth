import * as graphql from "@nestjs/graphql";
import { PostCallActionResolverBase } from "./base/postCallAction.resolver.base";
import { PostCallAction } from "./base/PostCallAction";
import { PostCallActionService } from "./postCallAction.service";

@graphql.Resolver(() => PostCallAction)
export class PostCallActionResolver extends PostCallActionResolverBase {
  constructor(protected readonly service: PostCallActionService) {
    super(service);
  }
}
