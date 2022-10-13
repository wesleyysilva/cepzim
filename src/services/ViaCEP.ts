import axios from 'axios';
import {ICEP} from '../interfaces/ICEP'
import { IDataCEP } from '../interfaces/IDataCEP';


class ViaCEP implements ICEP{
    
     async findByCEP(cep: string): Promise<IDataCEP> {

       cep = cep.replace(/[^0-9]/g,'');
       
       if (cep.length != 8){
        throw new Error("zip code size is not allowed");   
      }

       const response  =  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
       const data  =  response.data as IDataCEP;
       return data ;     
    }

    async findByStreet(state: string, city: string, street: string): Promise<IDataCEP[]> {

        if (!state){
          throw new Error("State not informed");   
        }

        if (!city){
          throw new Error("City not informed");   
        }
        
        if (!street){
            throw new Error("Street not informed");   
        }          

        const response  =  await axios.get(`https://viacep.com.br/ws/${state}/${city}/${street}/json/`);
        const data  =  response.data as IDataCEP[];
        return data ;
    }
    
}

export {ViaCEP}