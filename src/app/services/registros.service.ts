import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  
  public search_string:string = '';
  public registros2:registro[]=[];
  private registros:registro[]=[
    {
      CodigoRegistro: '1',
      Fecha: '2023-07-31',
      Cliente: 'Ana Gómez',
      TipoInteraccion: 'TelefonoFijo',
      Descripcion: 'Consulta sobre el estado de su pedido.',
    },
    {
      CodigoRegistro: '2',
      Fecha: '2023-07-30',
      Cliente: 'Juan Pérez',
      TipoInteraccion: 'Celular',
      Descripcion: 'Confirmación de la cita para el próximo lunes.',
    },
    {
      CodigoRegistro: '3',
      Fecha: '2023-07-29',
      Cliente: 'María Rodríguez',
      TipoInteraccion: 'WhatsApp',
      Descripcion: 'Solicitud de información sobre nuevos productos.',
    },
    {
      CodigoRegistro: '4',
      Fecha: '2023-07-28',
      Cliente: 'Carlos López',
      TipoInteraccion: 'Instagram',
      Descripcion: 'Respuesta a una queja relacionada con el servicio.',
    },
    {
      CodigoRegistro: '5',
      Fecha: '2023-07-27',
      Cliente: 'Laura Torres',
      TipoInteraccion: 'Facebook',
      Descripcion: 'Seguimiento sobre un problema técnico reportado.',
    },
    {
      CodigoRegistro: '6',
      Fecha: '2023-07-26',
      Cliente: 'Jorge Ramírez',
      TipoInteraccion: 'TelefonoFijo',
      Descripcion: 'Consulta sobre la disponibilidad de un producto.',
    },
    {
      CodigoRegistro: '7',
      Fecha: '2023-07-25',
      Cliente: 'Sofía Martínez',
      TipoInteraccion: 'Celular',
      Descripcion: 'Solicitud de cambio de dirección de envío.',
    },
    {
      CodigoRegistro: '8',
      Fecha: '2023-07-24',
      Cliente: 'Pedro Gutiérrez',
      TipoInteraccion: 'WhatsApp',
      Descripcion: 'Asistencia técnica para configurar un dispositivo.',
    },
    {
      CodigoRegistro: '9',
      Fecha: '2023-07-23',
      Cliente: 'Isabel Vargas',
      TipoInteraccion: 'Instagram',
      Descripcion: 'Agradecimiento por la atención recibida en la tienda.',
    },
    {
      CodigoRegistro: '10',
      Fecha: '2023-07-22',
      Cliente: 'Andrés Medina',
      TipoInteraccion: 'Facebook',
      Descripcion: 'Solicitud de cancelación de un servicio contratado.',
    },

  ]
  constructor() { }

  agregarRegistro(registro: registro) {
    this.registros.push(registro);
  }

  // Método para buscar registros según el cliente o el tipo de interacción
  buscarRegistros(termino: string): registro[] {
    this.search_string = termino;
    if (termino) {
      return this.registros.filter(
        (registro) =>
          registro.Cliente.toLowerCase().includes(termino.toLowerCase()) ||
          registro.TipoInteraccion.toLowerCase().includes(termino.toLowerCase())
      );
    } else {
      return this.registros;
    }
  }

  // Método para actualizar un registro
  actualizarRegistro(registro: registro) {
    const index = this.registros.findIndex(
      (r) => r.CodigoRegistro === registro.CodigoRegistro
    );
    if (index !== -1) {
      this.registros[index] = registro;
    }
  }

  // Método para eliminar un registro
  eliminarRegistro(codigoRegistro: string) {
    this.registros = this.registros.filter(
      (registro) => registro.CodigoRegistro !== codigoRegistro
    );
  }
}



export interface registro{
  CodigoRegistro: string;
  Fecha: string;
  Cliente: string;
  TipoInteraccion: string;
  Descripcion: string;

}
