// src/components/Step.js
import './Step.css';

const Step = ({ key,icon, label, isActive }) => {
    return (
        <div  className={`step ${isActive ? 'active' : ''}`}>
            <div className="step-content flex flex-col justify-center items-center ">
                {/* <img className='size'  src={icon} alt={`${label} icon`} /> */}
                <div className='size'>
                    <span className='flex justify-center'>{icon}</span>
                </div>
                <span className='px-2 text-white text-sm' >{label}</span>
            </div>
        </div>
    );
};

export default Step;
