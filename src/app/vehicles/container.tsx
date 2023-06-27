import { updateVehicleText } from "@/mocks/vehicles";
import { IVehicle } from "@/types/vehicle";
import Link from "next/link";
import DelButton from "../components/delButton";


interface Props extends IVehicle {
    delCallback: (id: number) => void
}

const Container = (props: Props) => {
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
                    <Link 
                        href={`vehicle/${props.id}`}
                        className=""
                    >

                    </Link>
                    <DelButton 
                        onClick={() => props.delCallback(props.id)}
                    />
                </div>
            </article>
        </li>
    );
};


export default Container;