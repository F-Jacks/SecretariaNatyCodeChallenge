import { updateVehicleText } from "@/mocks/vehicles";
import { IVehicle } from "@/types/vehicle";
import LinkButton from "../components/linkButton";

const Container = (props: IVehicle) => {
    return (
        <li>
            <article>
                <h3>
                    {props.placa}
                </h3>
                <div>
                    <p>{props.marcaModelo}</p>
                    <p>{props.anoFabricacao}</p>
                    <p>{props.kmAtual}</p>
                    <p>{props.id}</p>
                </div>
                <div>
                    <LinkButton 
                        href={`vehicle/${props.id}`}
                        isFilled
                    >
                        {updateVehicleText}
                    </LinkButton>
                </div>
            </article>
        </li>
    );
};


export default Container;