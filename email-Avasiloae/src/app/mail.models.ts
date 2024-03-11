export class email{
    destinatario: string;
    oggetto: string;
    corpo: string;
    constructor(destinaraio:string, oggetto:string, corpo:string){
        this.destinatario = destinaraio;
        this.oggetto = oggetto;
        this.corpo = corpo;
    }
}