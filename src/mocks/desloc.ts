import { IForm } from '@/types/form';
import Image from '/public/imgs/GoogleMapTA.webp';


export const backgroundImage = {
    src: Image,
    alt: "map background"
};


export const form: IForm = {
    url: 'https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/IniciarDeslocamento',
    method: "post",
    inputs: [
        {name: 'kmInicial', type: 'number'},
        {name: 'inicioDeslocamento', type: "datetime-local"},
        {name: 'checkList', type: 'text'},
        {name: 'motivo', type: 'text'},
        {name: 'observacao', type: 'text'},
        {name: 'idCondutor', type: 'number'},
        {name: 'idVeiculo', type: 'number'},
        {name: 'idCliente', type: 'number'}
    ]
}