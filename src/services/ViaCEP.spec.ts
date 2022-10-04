import { ViaCEP } from "./ViaCEP";

let viacep: ViaCEP;

describe("Test functions on ViaCEP", () => {

  beforeEach(() => {
    viacep = new ViaCEP();
  });

  it('testing findByCEP', async () => {

    const resp = await viacep.findByCEP('35050-000');

    expect(viacep).toBeInstanceOf(ViaCEP);

    expect(resp).toHaveProperty('cep');
    expect(resp).toHaveProperty('logradouro');
    expect(resp).toHaveProperty('complemento');
    expect(resp).toHaveProperty('bairro');
    expect(resp).toHaveProperty('localidade');
    expect(resp).toHaveProperty('uf');
    expect(resp).toHaveProperty('ibge');
    expect(resp).toHaveProperty('gia');
    expect(resp).toHaveProperty('ddd');
    expect(resp).toHaveProperty('siafi');

    expect(resp.cep).toEqual('35050-000');
    expect(resp.logradouro).toEqual('Rua Antônio Rosa Machado');
    expect(resp.complemento).toEqual('');
    expect(resp.bairro).toEqual('São José');
    expect(resp.localidade).toEqual('Governador Valadares');
    expect(resp.uf).toEqual('MG');
    expect(resp.ibge).toEqual('3127701');
    expect(resp.gia).toEqual('');
    expect(resp.ddd).toEqual('33');
    expect(resp.siafi).toEqual('4553');
  });

  it('testing findByStreet', async () => {

    const resp = await viacep.findByStreet('MG', 'Belo Horizonte', 'Rio Branco');

    expect(viacep).toBeInstanceOf(ViaCEP);

    expect(resp.length.toString()).toEqual('6');

    expect(resp[4].cep).toEqual('30111-959');
    expect(resp[4].complemento).toEqual('100 Loja 321');
    expect(resp[4].bairro).toEqual('Centro');
    expect(resp[4].ibge).toEqual('3106200');
  });
});