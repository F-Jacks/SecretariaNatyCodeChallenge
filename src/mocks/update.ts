import { TFormConst } from "@/types/form";

export const form: TFormConst = {
    'rider': {
        url: 'https://api-deslocamento.herokuapp.com/api/v1/Cliente',
        method: 'put',
        inputs: [
            { name: "id", type: "number" },
            { name: "nome", type : "text"},
            { name: "logradouro", type : "text"},
            { name: "numero", type : "text"},
            { name: "bairro", type : "text"},
            { name: "cidade", type : "text"},
            { name: "uf", type : "text"}
        ]
    },
    'driver': {
        url: 'https://api-deslocamento.herokuapp.com/api/v1/Condutor',
        method: 'put',
        inputs: [
            { name: "id", type: "number" },
            {name:"categoriaHabilitacao", type: "text"},
            {name: "vencimentoHabilitacao", type: 'date'}
        ]
    }
}