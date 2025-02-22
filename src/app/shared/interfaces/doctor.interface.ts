export interface IDoctor {
  getName(): string
  getBirthdate(): Date | null
  getEmail(): string
  getPhone(): string
  getSpeciality(): string
  getCrm(): string
  getCpf(): string
  getAddress(): Array<any>
}
