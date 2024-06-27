import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/features/user/services/user.service';
import { ProductionService } from '../../services/production.service';
import { Router } from '@angular/router';

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
    private router: Router

  ) { }

  ngOnInit(): void { 
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: ['', Validators.required],
      date_debut: ['', Validators.required],
    });
  }


  public createCycle() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._productionService.createCycle(this.createForm.value).subscribe(res => {
      this.router.navigate(['/productions'])
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
