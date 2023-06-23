import Image from 'next/image';
import LinkButton from '../components/linkButton';

interface Props {
    paramas: {
        type: string
    }
}


const Sign = (props: Props) => {
    return (
        <>
            <section className="min-h-[35rem] w-full mt-[calc(3.25rem-2px)] grow relative">
                <Image
                    src={""}
                    alt={""}
                    width={1200}
                    height={1200}
                    className='absolute top-0 right-0 w-1/2 h-full bg-white -z-10'
                />
                <h1 className='bg-black absolute top-1/2 -tranalte-y-1/2 right-[25%] text-white w-3/4 max-w-2xl'>
                    {"Work with us"}
                </h1>
                {/* <h2 className='bg-black text-white w-3/4 max-w-2xl'>
                    {"wkhqoieu ewoifypqeiwo eiowryoiewu hapiufwe fiufewhoreiuqheirq fpiuhfpoiuew difpiuewbfpi ofihpewiurwi fdpahweipoufweq dçpafigfhoweiu pdfiuhpoweiuqb sdiuehwrpiuoew daoifhpewqiure"}
                </h2> */}
            </section>
            <section className='flex flex-col gap-y-[1.6rem] lt:flex-row gap-x-8 px-[5%] mx-auto w-full max-w-6xl'>
                <LinkButton href={'/'}>
                    {""}
                </LinkButton>
                <LinkButton href={'/'} isFilled>
                    {""}
                </LinkButton>
            </section>
        </>
    );
};


export default Sign;