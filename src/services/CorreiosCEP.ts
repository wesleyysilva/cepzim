import axios from 'axios';
import { ICEP } from "../interfaces/ICEP";
import { IDataCEP } from "../interfaces/IDataCEP";

import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser'

class CorreiosCEP implements ICEP{

   async findByCEP(cep: string): Promise<IDataCEP> {
     
     try{

         cep = cep.replace(/[^0-9]/g,'');
         
         if (cep.length != 8){
            throw new Error("zip code size is not allowed");   
         }  
            
         const response  = await  axios.post(`https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente`,
            `<?xml version="1.0"?>
             <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">
             <soapenv:Header />
             <soapenv:Body>
             <cli:consultaCEP><cep>${cep}</cep></cli:consultaCEP>
             </soapenv:Body>
             </soapenv:Envelope>`);                                    
      
         let p = new XMLParser();
         let parseado = p.parse(response.data);   
                      
         parseado = parseado['soap:Envelope']['soap:Body']['ns2:consultaCEPResponse']['return'] ;  

         const data = { 
         cep:         parseado['cep'].toString(),
         logradouro:  parseado['end'],
         complemento: parseado['complemento2'],
         bairro:      parseado['bairro'],
         localidade:  parseado['cidade'],
         uf:          parseado['uf'],
         ibge: 'n/a',
         gia: 'n/a',
         ddd: 'n/a',
         siafi: 'n/a' 

        } as IDataCEP;        
   
        return data ; 

      }catch(err){
        console.log(err);
        return {} as IDataCEP;
      }
    }
    
    findByStreet(uf: string, state: string, street: string): Promise<IDataCEP[]> {
        throw new Error("Method not implemented.");
    }
}

export {CorreiosCEP}