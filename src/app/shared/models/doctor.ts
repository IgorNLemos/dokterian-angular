import { IDoctor } from '../interfaces/doctor.interface';

export class Doctor implements IDoctor {
  private name: string
  private birthdate: Date | null
  private email: string
  private phone: string
  private speciality: string
  private crm: string
  private cpf: string
  private address: Array <any>

  constructor();
  constructor(doctor: Doctor);

  constructor(doctor?: Doctor){
    this.name = doctor?.name || ''
    this.birthdate = doctor?.birthdate || null
    this.email = doctor?.email || ''
    this.phone = doctor?.phone || ''
    this.speciality = doctor?.speciality || ''
    this.crm = doctor?.crm || ''
    this.cpf = doctor?.cpf || ''
    this.address = doctor?.address || []
  }

  getName(): string{
    return this.name
  }

  setName(name:string): void {
    this.name = name;
  }

  getBirthdate(): Date | null {
    return this.birthdate
  }

  setBirthdate(birthdate:Date|null): void {
    this.birthdate = birthdate;
  }

  getEmail(): string{
    return this.email
  }

  setEmail(email:string): void {
    this.email = email;
  }

  getPhone(): string{
    return this.phone
  }

  setPhone (phone:string): void {
    this.phone = phone;
  }

  getSpeciality(): string{
    return this.speciality
  }

  setSpeciality(speciality:string): void {
    this.speciality = speciality;

  }

  getCrm(): string{
    return this.crm
  }

  setCrm(crm:string): void {
    this.crm = crm;

  }

  getCpf(): string{
    return this.cpf
  }

  setCpf(cpf:string): void {
    this.cpf = cpf;

  }

  getAddress(): Array<any> []{
    return this.address
  }

  setAddress(address:any): void {
    this.address = address;
  }

  cleanCpf(): string {
    return this.cpf
      .replace('-', '')
      .replaceAll('.', '')
  }

}


