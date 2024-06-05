import { Module } from "@nestjs/common";
import { PostCallActionModuleBase } from "./base/postCallAction.module.base";
import { PostCallActionService } from "./postCallAction.service";
import { PostCallActionController } from "./postCallAction.controller";
import { PostCallActionResolver } from "./postCallAction.resolver";

@Module({
  imports: [PostCallActionModuleBase],
  controllers: [PostCallActionController],
  providers: [PostCallActionService, PostCallActionResolver],
  exports: [PostCallActionService],
})
export class PostCallActionModule {}
