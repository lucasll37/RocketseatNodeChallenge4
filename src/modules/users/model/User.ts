import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    const initDate = new Date();

    this.id = uuidV4();
    this.admin = false;
    this.created_at = initDate;
    this.updated_at = initDate;
  }
}

export { User };
