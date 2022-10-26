import { User } from "../entities/user";
import { UserObject } from "../types/objects/user";
import { UserRecord } from "../types/records/user";

export class UserMapper {
  public static fromObject(userObject: UserObject) {
    User.assertStatus(userObject.status);
    return new User({
      id: userObject.id,
      name: userObject.name,
      email: userObject.email,
      status: userObject.status,
    });
  }

  public static toObject(user: User) {
    const userObject: UserObject = {
      id: user.id,
      name: user.name,
      email: user.email,
      status: user.status,
    };
    return userObject;
  }

  public static toRecord(user: User) {
    const userRecord: UserRecord = {
      id: user.id,
      name: user.name,
      status: user.status,
    };
    return userRecord;
  }
}
