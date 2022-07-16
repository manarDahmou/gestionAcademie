import { FormGroup } from "@angular/forms";


export function MustMatch(controlName: string, matchingControlName : string){

    return (formGroup: FormGroup) =>{
        // const control = signupForm.controls['pwd']
        const control = formGroup.controls[controlName];
        // const matchingControl = signupForm.controls['cpwd']
        const matchingControl = formGroup.controls[matchingControlName];
        if(control.value !== matchingControl.value){
            //mustMatch recoit true c'est a dire oui il ya un probleme
            matchingControl.setErrors({mustMatch : true})
        }else{
            //pas de probleme pwd == cpwd
            matchingControl.setErrors(null);
        }
    }




}