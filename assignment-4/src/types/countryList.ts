export interface countryList{
    name:{
        common:string,
        official:string
    },
    flags:{
        png: string,
        svg: string
    },
    population:number,
    region:string,
    capital:string
}

export interface SingleCountryType{
    name:{
        common:string,
        official:string
    },
    flags:{
        png: string,
        svg: string
    },
    population:number,
    region:string,
    capital:string,
    languages:{
        [key:string]:string
    },
    currencies:{
        [key:string]:{
            name:string
        }
    },
    borders:[
        string
    ] | string[],
    latlng:[
        lat:number,
        lng:number
    ]
}