import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';
import { ProjectModule } from './project/project.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [ProfileModule, ProjectModule],
  controllers: [AppController, ProfileController, UserController],
  providers: [AppService, ProfileService, UserService],
})
export class AppModule {}
