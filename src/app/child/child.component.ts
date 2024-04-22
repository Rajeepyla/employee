import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  employeeDetails: any;
  
  @Input() set details(value: any) {
    if (value) {
      console.log('value', value)
      this.employeeDetails = value
      this.updateFormValues()
    }
  }
  ngOnInit(): void {

  }

  private updateFormValues() {
    this.employee.patchValue({
      id: this.employeeDetails.id,
      name: this.employeeDetails.name,
      designation: this.employeeDetails.designation,
      email: this.employeeDetails.email
    })
  }


  protected employee: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    designation: new FormControl(''),
    email: new FormControl('')
  })

}
