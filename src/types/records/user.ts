export declare module UserRecord {
  type Status = "active" | "inactive" | "awaiting";
}

export type UserRecord = {
  id: string;
  name: string;
  status: UserRecord.Status;
};
