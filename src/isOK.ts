import { ViaCEP } from "./services/ViaCEP";


async function getCEP(cep: string){
   const viacep = new ViaCEP();
   console.log(await viacep.findByCEP(cep));
}

async function get_On_Street(uf: string, city: string, street: string){
    const viacep = new ViaCEP();
    console.log(await viacep.findByStreet(uf, city, street));
 }
 


get_On_Street('MG','Belo Horizonte', 'Rio Branco')
getCEP('36030600')


