import { Component } from '@angular/core';
import { RegistrosService, registro } from 'src/app/services/registros.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
  registrosFiltrados: registro[];
  registroSeleccionado: registro = {
    CodigoRegistro: '',
    Fecha: '',
    Cliente: '',
    TipoInteraccion: '',
    Descripcion: '',
  };
  terminoBusqueda: string = '';

  constructor(private registrosService: RegistrosService) {
    this.registrosFiltrados = registrosService.buscarRegistros('');
  }

  // Métodos para manejar las operaciones CRUD
  agregarRegistro(registro: registro) {
    this.registrosService.agregarRegistro(registro);
  }

  buscarRegistros() {
    this.registrosFiltrados = this.registrosService.buscarRegistros(
      this.terminoBusqueda
    );
  }

  seleccionarRegistro(registro: registro) {
    this.registroSeleccionado = { ...registro };
  }

  actualizarRegistro(registro: registro) {
    this.registrosService.actualizarRegistro(registro);
  }

  eliminarRegistro(codigoRegistro: string) {
    this.registrosService.eliminarRegistro(codigoRegistro);
  }
}