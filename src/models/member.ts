export class Member {
  id?: number;
  name: string;
  surname: string;
  memberNumber: any;
  dni: string;
  phone: any;
  gender: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.surname = "";
    this.memberNumber = 0;
    this.dni = "";
    this.phone = 0;
    this.gender = "";
  }
}
