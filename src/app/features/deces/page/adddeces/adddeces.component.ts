import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseInterfaceData, purchaseData } from 'src/app/shared/utils/data/purchaseData';
import { DecesService } from '../../service/deces.service';


@Component({
  selector: 'app-adddeces',
  templateUrl: './adddeces.component.html',
  styleUrls: ['./adddeces.component.scss']
})
export class AdddecesComponent implements OnInit {
  submitted: any;


  createForm: any;

  constructor(
    private _decesService: DecesService,
  ) { }

  ngOnInit() {

  }

  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end
  // hide = true;



  createDeces() {
    throw new Error('Method not implemented.');
  }


}






