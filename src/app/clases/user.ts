export class User {
  constructor(
    public _id: string,
    public nombre: string,
    public apellidos: string,
    public edad: number,
    public fechaHabilitacion: Date,
    public tipo: string,
    public Paquete: number,
    public fechaPaquete: Date,
    public estadoPaquete: string, 
  ) { }
}
