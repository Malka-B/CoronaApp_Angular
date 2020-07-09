import { ILocation } from "./ILocation.model";

export interface IPatient{
    id : number,
    age : number,        
    userName : string,
    password : string,
    locationsList : ILocation[]
}