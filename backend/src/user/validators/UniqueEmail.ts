import {
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    registerDecorator,
} from 'class-validator';
import UserService from '../services/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({async: true})
export class UniqueEmailValidator implements ValidatorConstraintInterface {
    constructor(
        private userServices: UserService    
    ){}
    async  validate(email: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const user = await this.userServices.listUserPerEmail(email);
        return !user
    }
}

export const uniqueEmail = (options: ValidationOptions) => {
    return (object: object, property: string) => {
        registerDecorator({
            propertyName: property,
            target: object.constructor,
            options,
            constraints: [],
            validator: UniqueEmailValidator
        })
    }
}