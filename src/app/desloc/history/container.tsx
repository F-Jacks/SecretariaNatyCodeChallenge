interface Props {
    id: number,
    kmInicial: number,
    kmFinal: number | null,
    inicioDeslocamento: string,
    fimDeslocamento: number | null,
    checkList: string,
    motivo: string,
    observacao: string,
    idCondutor: number,
    idVeiculo: number,
    idCliente: number
}

const Container = (props: Props) => {
    return (
        <li className="w-full p-4 bg-[rgba(255,255,255,0.1)] rounded-xl">
            <article>
                <h3 className="mb-2 text-white text-base">
                    {props.id}
                </h3>
                <div>
                    {
                        Object.entries(props).map((prop, idx) => {
                            if (prop[0] !== 'id') {
                                return <p 
                                    className="mb-1 text-white text-sm"
                                    key={idx}
                                >
                                    {`${prop[0]}: ${prop[1]}`}
                                </p>
                            }
                        })
                    }
                </div>
            </article>
        </li>
    );
};


export default Container;