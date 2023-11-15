import { ValidationErrors, AbstractControl } from "@angular/forms";

export class RegisterValidators {
    static match(group: AbstractControl): ValidationErrors | null {
        const control = group.get('password')
        const matchingControl = group.get('confirm_password')

        if(!control || !matchingControl){
            return { controlNotFound: false }
        }

        const error = control.value === matchingControl ? 
            null :
            { noMatch: true }

        return error
    
    }
}

// new RegisterValidators.match() <~ Without static
// RegisterValidators.match() <~ With static (We can directly call the method without
// creating a new instance.)

// If we don't need to mantain an object state, converting a method
// into a static method will result in writing less code.

// Validators should return either an object containing errors or null.

