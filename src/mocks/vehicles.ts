import { IForm } from "@/types/form";
import EditIcon from '@mui/icons-material/Edit';

export const title = "all vehicles";

export const updateVehicleIcon = EditIcon;
export const url = "https://api-deslocamento.herokuapp.com/api/v1/Veiculo";

export const registerText = "register a vehicle";

export const form: IForm = {
    url: 'https://api-deslocamento.herokuapp.com/api/v1/Veiculo',
    method: 'post',
    inputs: [
        {name: "placa", type: "text"},
        {name: "marcaModelo", type: "text"},
        {name:"anoFabricacao", type: "number"},
        {name: "kmAtual", type: 'number'}
    ]
};

export const updateForm: IForm = {
    url: 'https://api-deslocamento.herokuapp.com/api/v1/Veiculo',
    method: 'put',
    inputs: [
        {name: "id", type: "number"},
        {name: "marcaModelo", type: "text"},
        {name:"anoFabricacao", type: "number"},
        {name: "kmAtual", type: 'number'}
    ]
}