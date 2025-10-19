import { useNavigate } from 'react-router-dom';
import ErrorImage from '../assets/istockphoto-1193166520-612x612.jpg';
import { IoMdArrowBack  } from "react-icons/io";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className='min-h-screen flex justify-center items-center relative'>
            <img src={ErrorImage} alt="" className='object-cover' />
            <button className='btn btn-ghost absolute top-5 left-5 flex items-center' onClick={handleGoBack}>
                <IoMdArrowBack className='text-3xl'/>
            </button>
        </div>
    );
};

export default ErrorPage;