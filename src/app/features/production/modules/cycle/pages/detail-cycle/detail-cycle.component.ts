import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CycleService } from '../../services/cycle.service';

@Component({
  selector: 'app-detail-cycle',
  templateUrl: './detail-cycle.component.html',
  styleUrls: ['./detail-cycle.component.scss']
})
export class DetailCycleComponent {
  @ViewChild('updateModal') updateModal!: TemplateRef<any>;
  
  createForm!: FormGroup
  submitted: any;
  cycle: any;
  idCycle!: number;


  constructor(
    private _route: ActivatedRoute,
    private _cycleService: CycleService,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this._route.data.subscribe(({ cycle }) => {
      this.cycle = cycle.data;
    })
  }

  getCycleById() {
    this._cycleService.getCycleById(this.idCycle).subscribe(res => {
      this.cycle = res
    })
  }

  updateAlevin() {
    // Ouvre la modale
    this.isModalOpen = true;
  }
  updateCycleDetails() {
    throw new Error('Method not implemented.');
  }
  deleteCycle() {
    // Ouvre la modale
    this.isModalOpen = true;
  }


  isModalOpen: boolean = false;
  updateCycle() {
    // Ouvre la modale
    this.isModalOpen = true;
  }



openUpdateModal() {
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
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
  hide = true;
}
