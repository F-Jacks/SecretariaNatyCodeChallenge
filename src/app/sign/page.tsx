import Image from 'next/image';
import LinkButton from '../components/linkButton';
import { Input } from '@mui/material';

interface Props {
    paramas: {
        type: string
    }
}


const Sign = (props: Props) => {
    return (
        <>
            <section className="min-h-[35rem] w-full mt-[calc(3.25rem-2px)] grow relative grid grid-cols-[4px_1fr_25%] grid-row-[1fr_auto_auto] gap-4 justify-items-end items-center">
                <Image
                    src={""}
                    alt={""}
                    width={1200}
                    height={1200}
                    className='absolute top-0 right-0 w-1/2 h-full bg-slate-500 -z-10'
                />
                <h1 className='bg-black text-white text-6xl text-center p-4 w-auto max-w-xl min-w-[40%] col-start-2 row-start-2 relative after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:bg-white after:-z-20 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'>
                    {"Work with us"}
                </h1>
                <h2 className='bg-black text-xl text-white w-auto max-w-xl min-w-[40%] p-4 col-start-2 row-start-3 relative after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:bg-white after:-z-20 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'>
                    {"wkhqoieu ewoifypqeiwo eiowryoiewu hapiufwe fiufewhoreiuqheirq fpiuhfpoiuew difpiuewbfpi ofihpewiurwi fdpahweipoufweq dçpafigfhoweiu pdfiuhpoweiuqb sdiuehwrpiuoew daoifhpewqiure"}
                </h2>
            </section>
            <section className='flex flex-col gap-y-[1.6rem] lt:flex-row gap-x-8 px-[5%] mx-auto w-full max-w-6xl'>
                <LinkButton href={'/'}>
                    {""}
                </LinkButton>
                <LinkButton href={'/'} isFilled>
                    {""}
                </LinkButton>
            </section>
            <section>
                <Input 
                    name="id"
                    value="test"
                />
            </section>
        </>
    );
};


export default Sign;