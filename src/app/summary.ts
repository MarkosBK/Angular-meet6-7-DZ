import { stringify } from 'querystring';

export class Summary{
    public Name: string;
    public PhoneNumber: string;
    public Email: string;
    public City: string;
    public WorkExpYears: number;
    public Skills: Array<string>;
    public Photo: string;
    public Links: Map<string,string>
    constructor(Name:string,
         PhoneNumber:string,
         Email:string,
         City:string,
         WorkExpYears:number,
         Skills:string[],
         Photo:string,
         Links:Map<string,string>){
            this.Name=Name;
            this.PhoneNumber=PhoneNumber;
            this.Email=Email;
            this.City=City;
            this.WorkExpYears=WorkExpYears;
            this.Skills=Skills;
            this.Photo=Photo;
            this.Links=Links
    }
}