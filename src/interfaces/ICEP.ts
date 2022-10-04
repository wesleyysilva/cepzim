import {IDataCEP} from './IDataCEP';

interface ICEP{
 findByCEP(cep: string): Promise<IDataCEP>;
 findByStreet(uf: string, state: string, street: string): Promise<IDataCEP[]>
}

export {ICEP}