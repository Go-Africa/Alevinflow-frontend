import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/features/user/services/user.service';
import { ProductionService } from '../../services/production.service';

@Component({
  selector: 'app-add-cycle',
  templateUrl: './add-cycle.component.html',
  styleUrls: ['./add-cycle.component.scss']
})
export class AddCycleComponent {

  createForm!: FormGroup
submitted: any;

  constructor(
    private _productionService: ProductionService,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void { 
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', [Validators.required]],
      statut: ['', [Validators.required]], // Initialisé à false par défaut
    });
  }


  public createUser() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._productionService.createCycle(this.createForm.value).subscribe(res => {
      // this.createForm.reset()
    })
    return ""
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
