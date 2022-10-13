# Cepzim

## Descrição

Essa biblioteca foi criada como método para aplicar os fundamentos da linguagem javascript assim como seu superset Typescript.

## Features

 * Consulta diretamente a plataforma ViaCEP
 * Sem limite de utilização.
 * Possui alguns testes - sempre que possível novos casos de testes serão incluídos.

## Como Utilizar

### Instalação

Instale via npm ou yarn diretamente - no diretório da aplicação - no bash com o comando:

```bash
npm i cepzim
```

```bash
yarn add cepzim 
```
### Utilização

```javascript

import { ViaCEP } from "./services/ViaCEP";
import { CorreiosCEP} from "./services/CorreiosCEP"


async function getCEP_ViaCEP(cep: string){
   const viacep = new ViaCEP();
    console.log(await viacep.findByCEP(cep));
}

async function get_On_Street_ViaCEP(uf: string, city: string, street: string){
    const viacep = new ViaCEP();
    console.log(await viacep.findByStreet(uf, city, street));
 }

async function getCEP_Correios(cep: string){
   const correioscep = new CorreiosCEP();
   console.log(await correioscep.findByCEP(cep));
}

get_On_Street_ViaCEP('MG','Belo Horizonte', 'Rio Branco')

getCEP_ViaCEP('36030600')

getCEP_Correios('36030600')

```
