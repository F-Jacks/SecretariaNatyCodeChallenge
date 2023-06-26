import Image from 'next/image';
import { image, title } from "@/mocks/login";
import LoginForm from "./loginForm";
import { TUserType } from '@/types/user';

interface Props {
    params: {
        user: TUserType
    }
}


const Login = ({params}: Props) => {
    return (
        <div className="mx-auto px-[5%] grow w-full mt-[60px] ltmd:mt-[68px] flex flex-col justify-center gap-y-12">
            <section>
                <h1 className="text-xl w-full text-center my-6 text-white">
                    {title[params.user]}
                </h1>
                <div className="h-20 w-full xl:h-64 relative">
                    <Image
                        src={image[params.user]}
                        alt={`background image for ${params.user}`}
                        width={1500}
                        height={400}
                        className='object-cover w-full h-full absolute overflow-hidden top-0 left-0 opacity-60 -z-10'
                        placeholder='blur'
                    />
                </div>
            </section>
            <LoginForm 
                user={params.user}
            />
        </div>
    );
};


export default Login;