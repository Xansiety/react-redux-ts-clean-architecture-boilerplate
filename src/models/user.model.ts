import { type } from "os";

export interface User {
    id: number;
    name: string;
    email: string;
}

export enum UserKeys {
  storeName = "user",
  lsKeyName = "lsUser", 
}

export const UserEmptyState: User = {
    id: 0,
    name: "",
    email: "",
}