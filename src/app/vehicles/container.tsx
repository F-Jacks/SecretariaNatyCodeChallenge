import { IVehicle } from "@/types/vehicle";
import Link from "next/link";
import DelButton from "../components/delButton";
import { updateVehicleIcon } from "@/mocks/vehicles";
import SvgIcon from "@mui/material/SvgIcon";


interface Props extends IVehicle {
    delCallback: (id: number) => void
}

const Container = (props: Props) => {
    return (
        <li className="w-full p-4 bg-[rgba(255,255,255,0.1)] rounded-xl">
            <article>
                <h3 className="mb-2 text-white text-base">
                    {props.placa}
                </h3>
                <div>
                    <p className="mb-1 text-white text-sm">{props.marcaModelo}</p>
                    <p className="mb-1 text-white text-sm">{props.anoFabricacao}</p>
                    <p className="mb-1 text-white text-sm">{props.kmAtual}</p>
                    <p className="mb-1 text-white text-sm">{props.id}</p>
                </div>
                <div className="flex justify-between mt-4 text-white">
                    <Link 
                        href={`vehicles/${props.id}`}
                        className="h-8 w-8 rounded-[8px] bg-[#0076E3] flex justify-center items-center"
                    >
                        <SvgIcon component={updateVehicleIcon} viewBox="0 0 24 24" />
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