import { ViaCEP } from "./ViaCEP";


describe("Test functions on ViaCEP", ()=>{


  it('testing findByCEP', async ()=> {

    const viacep = new ViaCEP();

    const resp = await viacep.findByCEP('36050-000');

   console.log(resp)

    expect(viacep).toBeInstanceOf(ViaCEP);
    expect(resp).toHaveProperty('cep');
  })

});