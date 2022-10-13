# Cepzim

## Descrição

Essa biblioteca foi criada como método para aplicar e entender os fundamentos da linguagem javascript assim como seu superset Typescript.


## Features

 * Consulta diretamente a plataforma ViaCEP ou Correrios
 * O Dev é quem decide o que utilizar, podendo criar uma função para avaliar qual plataforma estã on-line.
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

import { ViaCEP, CorreiosCEP } from "cepzim";

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

```
