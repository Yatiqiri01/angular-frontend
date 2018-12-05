export class Usuario {
  constructor(
    public _id: string,
    public nombre: string,
    public apellidos: string,
    public fechaHabilitacion: Date,
    public __v: number,
    public tipo: string,
    public estado: string,
    public Paquete: Number,
    public fechaPaquete: Date,
    public estadoPaquete: string
    ) {
  }
}
