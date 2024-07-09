import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/features/customer/services/customer.service';
import { CustomerInterfaceData, customerData } from 'src/app/shared/utils/data/customerData';

@Component({
  selector: 'app-listdeces',
  templateUrl: './listdeces.component.html',
  styleUrls: ['./listdeces.component.scss']
})
export class ListdecesComponent implements AfterViewInit {
  displayedColumns: string[] = [
   'select',
    'id',
    'date',
    'quantité',
    'calibre_alevin',
    'lot',
    'cycle',
    'action',
  ];
  dataSource: MatTableDataSource<CustomerInterfaceData>;
  selection = new SelectionModel<CustomerInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  customers: any = [];

  constructor(
    private _customerService: CustomerService
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(customerData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: CustomerInterfaceData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    } else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end

  ngOnInit(): void {
    this.getAllCustomer()
  }

  getAllCustomer(){
    this._customerService.getAllCustomer().subscribe((res: { data: any; }) => {
      this.customers = res.data
    })
  }
}


