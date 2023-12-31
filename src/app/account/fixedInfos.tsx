import Image from 'next/image';
import { TDictTuple } from "@/types/common";
import { TUser } from '@/types/user';
import { riderIconSrc, loginIconSrc, driverIconSrc } from '@/mocks/user';

interface Props {
    fixedInfos: TDictTuple,
    user: TUser
}


const FixedInfos = (props : Props) => {
    let avatar = {
        alt: props.user ? props.user.type : 'user',
        src: props.user ? 
            props.user.type === "driver" ? 
                driverIconSrc : 
                riderIconSrc
            :
            loginIconSrc
    }

    const substituirMaiusculasPorMinusculas = (str: string) => {
        var novaString = "";
        for (var i = 0; i < str.length; i++) {
          var letra = str[i];
          if (letra === letra.toUpperCase()) {
            novaString += " " + letra.toLowerCase();
          } else {
            novaString += letra;
          }
        }
        return novaString;
    }

    return (
        <section className='mx-auto px-[5%] max-w-4xl gap-x-4 w-full mt-[6px] ltmd:mt-[8px] flex flex-wrap items-center justify-between h-fit'>
            <h1 className="bg-white rounded-xl relative w-24 h-24">
                <Image
                    src={avatar.src}
                    alt={`${avatar.alt} interface`}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full absolute overflow-hidden top-0 left-0"
                    placeholder='blur'
                />
            </h1>
            <ul className='h-fit flex flex-col gap-y-2'>
                {
                    props.fixedInfos.map((inp, idx) => (
                        <li
                            key={idx}
                        >
                            <p className='text-white text-sm'>
                                {`${substituirMaiusculasPorMinusculas(inp[0])}: ${inp[1]}`}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};


export default FixedInfos;