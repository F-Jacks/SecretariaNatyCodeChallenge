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
        method: 'get',
        inputs: [
            { name: "id", type: "number", apiType: "param" },
        ]
    },
    'driver': {
        url: 'https://api-deslocamento.herokuapp.com/api/v1/Condutor',
        method: 'get',
        inputs: [
            { name: "id", type: "number", apiType: "param" },
        ]
    }
}