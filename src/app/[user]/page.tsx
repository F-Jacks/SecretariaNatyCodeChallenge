import Image from 'next/image';
import LinkButton from '../components/linkButton';
import { image, login, register, text, title } from '@/mocks/home/sign';
import { TUserType } from '@/types/user';


interface Props {
    params: {
        user: TUserType
    }
}

const Sign = ({params}: Props) => {
    console.log(params);

    return (
        <>
            <section className="min-h-[35rem] w-full mt-[60px] ltmd:mt-[68px] grow relative grid grid-cols-[4px_1fr_25%] grid-row-[1fr_auto_auto] gap-4 justify-items-end items-center">
                <div className='absolute top-0 right-0 w-1/2 h-full'>
                    <Image
                        src={image[params.user]}
                        alt={`background image for ${params.user}`}
                        width={1200}
                        height={1200}
                        className='object-cover w-full h-full absolute overflow-hidden top-0 left-0 opacity-60 -z-10'
                        placeholder='blur'
                    />
                </div>
                <h1 className='bg-black text-white text-6xl text-center p-4 w-auto max-w-xl min-w-[40%] col-start-2 row-start-2 relative after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:bg-white after:-z-20 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'>
                    {title[params.user]}
                </h1>
                <h2 className='bg-black text-xl text-white w-auto max-w-xl min-w-[40%] p-4 col-start-2 row-start-3 relative after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:bg-white after:-z-20 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'>
                    {text[params.user]}
                </h2>
            </section>
            <section className='flex flex-col gap-y-[1.6rem] lt:flex-row gap-x-8 px-[5%] mx-auto w-full max-w-6xl'>
                <LinkButton href={register[params.user].link}>
                    {register[params.user].text}
                </LinkButton>
                <LinkButton href={login[params.user].link} isFilled>
                    {login[params.user].text}
                </LinkButton>
            </section>
        </>
    );
};


export default Sign;