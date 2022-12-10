import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { persona } from 'src/app/interfaces/persona';
import { MatTableDataSource } from '@angular/material/table'
import { PersonaService } from 'src/app/services/persona.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['CodigoSucursal', 'Nombre', 'Direccion', 'Telefono', 'Acciones'];
  dataSource = new MatTableDataSource<persona>();
  loading: Boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar,
       private _personaService:PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length>0){

      this.paginator._intl.itemsPerPageLabel = 'items por pagina'

    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerPersonas(){
    this.loading = true;
    this._personaService.getDatos().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;

    })

  }


  eliminarPersona(){

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('El Dato fue eliminado con exito', '', {
        duration: 4000,
        horizontalPosition: 'right',
      });

    }, 3000);



  }

}
