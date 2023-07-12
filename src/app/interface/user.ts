import { Address } from "./address";
import { Company } from "./company"; 

export interface User {
     id?: number;        // ? -> è possibile che l'id sia nullo quando inviamo dati (POST request)
     name: string;
     username: string;
     email: string;
     address: Address;
     phone: string;
     website: string;
     company: Company;
}
