import { UserRole, UserStatus } from "@prisma/client";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    avaterUrl?: string;
    role: UserRole;
    status: UserStatus;
    createdAt: string;
    updatedAt: string;
  }