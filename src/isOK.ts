import { ViaCEP } from "./services/ViaCEP";
import { CorreiosCEP} from "./services/CorreiosCEP"

async function getCEP_ViaCEP(cep: string){
   const viacep = new ViaCEP();
   const data = await viacep.findByCEP(cep); 

   console.log(data);
}

async function get_On_Street_ViaCEP(uf: string, city: string, street: string){
    const viacep = new ViaCEP();
    const data = await viacep.findByStreet(uf, city, street);

    console.log(data);
 }

 async function getCEP_Correios(cep: string){
   const correioscep = new CorreiosCEP();
   const data = await correioscep.findByCEP(cep);

   console.log(data);
}


get_On_Street_ViaCEP('MG','Belo Horizonte', 'Rio Branco')

getCEP_ViaCEP('36030600')

getCEP_Correios('36030600')


