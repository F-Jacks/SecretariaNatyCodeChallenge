import { TFormConst } from "@/types/form";

export const title = {
    'rider': 'Begin your next ride',
    'driver': 'Begin your next ride'
};


import Image from "/public/imgs/3-dicas-imagens-preto-e-branco-em-seus-projetos-1.jpg";

export const image = {
    'rider': Image,
    'driver': Image
};


export const form: TFormConst = {
    'rider': {
        url: 'https://api-deslocamento.herokuapp.com/api/v1/Cliente',
        method: 'post',
        inputs: [
            { name: "numeroDocumento", type : "text"},
            { name: "tipoDocumento", type : "text"},
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
        method: 'post',
        inputs: [
            {name: "nome", type: "text"},
            {name: "numeroHabilitacao", type: "text"},
            {name:"categoriaHabilitacao", type: "text"},
            {name: "vencimentoHabilitacao", type: 'date'}
        ]
    }
}