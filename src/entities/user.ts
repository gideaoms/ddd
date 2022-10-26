import { not, UnionToObj } from "../utils";

export declare module User {
  type Status = "active" | "inactive" | "awaiting";
}

export class User {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _email: string;
  private readonly _status: User.Status;

  public constructor(user: {
    id: string;
    name: string;
    email: string;
    status: User.Status;
  }) {
    this._id = user.id;
    this._name = user.name;
    this._email = user.email;
    this._status = user.status;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get email() {
    return this._email;
  }

  public get status() {
    return this._status;
  }

  public isActive() {
    return this._status === "active";
  }

  public isAwaiting() {
    return this._status === "awaiting";
  }

  public toAwaiting() {
    return new User({
      id: this._id,
      name: this._name,
      email: this._email,
      status: "awaiting",
    });
  }

  public toActive() {
    return new User({
      id: this._id,
      name: this._name,
      email: this._email,
      status: "active",
    });
  }

  public static empty() {
    return new User({ id: "", name: "", email: "", status: "inactive" });
  }

  public static assertStatus(raw: string): asserts raw is User.Status {
    const status: UnionToObj<User.Status> = {
      active: "active",
      inactive: "inactive",
      awaiting: "awaiting",
    };
    if (not(raw in status)) throw new Error("Invalid status");
  }
}
