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
                    className='absolute top-0 right-0 w-1/2 h-full'
                />
                <h1>
                    {"oi"}
                </h1>
                <h2>
                    {"hj"}
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
        </>
    );
};


export default Sign;