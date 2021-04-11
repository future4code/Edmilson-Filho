import axios from 'axios';
// import { address } from '../types/address';

const URL = "https://viacep.com.br/ws";

export async function getAddressByCep(cep: string) {
    try {
        const result = await axios.get(`${URL}/${cep}/json`);
        const myAddress = {
            name: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        console.log(result)
        return myAddress;
    } catch (error) {
        throw new Error(error.message);
    }
}