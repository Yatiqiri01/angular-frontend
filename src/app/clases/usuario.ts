export class Usuario {
  constructor(
    public _id: String,
    public nombre: String,
    public apellidos: String,
    public fechaHabilitacion: Date,
    public __v: number,
    public tipo: String,
    public estado: String,
    public Paquete: Number,
    public fechaPaquete: Date,
    public estadoPaquete: String
    ) {
  }
}
