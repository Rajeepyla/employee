import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  employeeList: any

  constructor(private api: ServiceService) { }
  ngOnInit(): void {
    this.getAllDetails();
  }


  protected employeeDetails: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    designation: new FormControl(''),
    email: new FormControl('')
  })


  protected createDetails(){
this.employeeDetails.reset()
  }

  private getAllDetails() {
    this.api.getEmployess().subscribe((employees: any) => {
      console.log(employees)
      this.employeeList = employees
    })
  }

  protected editDetails(employeeDetails: any) {
    this.employeeDetails.patchValue({
      id: employeeDetails.id,
      name: employeeDetails.name,
      designation: employeeDetails.designation,
      email: employeeDetails.email
    })
  }

  protected saveChanges() {
    const closeDropdown= document.getElementById('close')
  if(this.employeeDetails.value.id){
    this.api.updateDetails(this.employeeDetails.value).subscribe((data:any)=>{
      console.log(data)
      this.getAllDetails()
    })
  }
  else{
    this.api.createDetails(this.employeeDetails.value).subscribe((data:any)=>{
      console.log(data)
      this.getAllDetails()
    })
  }
  closeDropdown?.click()
  }

  protected toDeleteDetails(employeeId: number) {
    this.api.removeEmployee(employeeId).subscribe((data: any) => {
      this.employeeDetails.reset()
    })
   
  }

}
