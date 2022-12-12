export class Consultas {
    _id?: number;
    nombre: string;
    email: string;
    whatsapp: number;
    fecha_ingreso: Date;
    fecha_salida: Date;
    mensaje: string;


        constructor(
            nombre: string,
            email: string,
            whatsapp: number,
            fecha_ingreso: Date,
            fecha_salida: Date,
            mensaje: string
        ){
            this.nombre = nombre;
            this.email = email;
            this.whatsapp = whatsapp;
            this.fecha_ingreso = fecha_ingreso;
            this.fecha_salida = fecha_salida;
            this.mensaje = mensaje;
        }
}