export declare module UserObject {
  type Status = "active" | "inactive" | "awaiting";
}

export type UserObject = {
  id: string;
  name: string;
  email: string;
  status: string;
};
