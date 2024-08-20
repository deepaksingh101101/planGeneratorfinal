import React, { useRef, useState } from 'react';
import GPT from "../../components/gpt/GPT";
import { logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { hitApi } from '../../api/requestHelpers';
import SmallLoader from '../../components/loader/SmallLoader'
import { useTranslation } from 'react-i18next';
export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate()

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success messages
    if(!email || !password || !name){
      setError(t('allFields'));
      return
    }

    setIsOtpSendCicked(true)
    try {
      const response = await hitApi('POST', '/api/user/sendOtp', { email });
      console.log(response)
      if (response.response.data.status !== true) {
        setError(response?.response?.data?.message || t('failedtosend'));
        return
      }  
      else if(response?.data?.status===true){
      // Handle successful signup
      setSuccess(response?.data?.message || t('otpSend'));
      setIsOtpSended(true)
      }
    

     
      
    } catch (err) {
      console.log(err)
    }
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!otp[5]){
      return
    }
    setLoading(true)
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success messages
    const otpString = otp.join('');

    try {
      const response = await hitApi('POST', '/api/user/verifyOtp', { email,otp:otpString,name,password });
      console.log(response)
      if (response.data.status === true) {
        // Handle successful signup
        setSuccess('Otp Verified');
        navigate('/sign')
      } else {
        // Handle error response
        setError(response.response.data.message ||t('incorrectOtp'));
        setLoading(false)

      }
    } catch (err) {
      setError('Incorrect Otp.');
      console.error(err);
      setLoading(false)

    }
  };

  const [isOtpSended, setIsOtpSended] = useState(false)
  const [isOtpSendCicked, setIsOtpSendCicked] = useState(false)

  const [otp, setOtp] = useState(["","","","","",""])
const inputRefs=useRef([])
const handleOtpChange=(index, value)=>{
const newOtp=[...otp];
newOtp[index]=value;

if(value && index<otp.length-1){
  inputRefs.current[index+1].focus();
}
setOtp(newOtp)

}

const handleKeyDown=(index,e)=>{
  if(e.key==="Backspace" && index>0 && !otp[index]){
const newOtp=[...otp];
newOtp[index-1]="";
inputRefs.current[index-1].focus();
setOtp(newOtp)

  }
}
const { t, i18n } = useTranslation();


  return (
    <div className="min-h-screen bg-[#0E0C15] text-gray-100 flex justify-center mt-20">
      <div className="w-full m-0 bg-[#0E0C15] shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 p-6 sm:p-12">
          {/* <div>
            <img src={logo} className="w-32 h-8 mx-auto" alt="Logo" />
          </div> */}
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-4xl xl:text-5xl font-extrabold text-white">
            {t('signUp')}
            </h1>
            <form onSubmit={handleSubmit} className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-[#3A3A48] border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-[#23222C] text-white"
                  type="text"
                  placeholder={t('name')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-[#3A3A48] border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-[#23222C] mt-5 text-white"
                  type="email"
                  placeholder={t('email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-[#3A3A48] border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-[#23222C] mt-5 text-white"
                  type="password"
                  placeholder={t('password')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="flex justify-end">
                <span className='justify-end mt-2 text-[15px] underline text-blue-600 ' onClick={handleSendOtp} >{t('sendOtp')}</span>
                </div>
                {error && (
                  <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
                )}
                {success && (
                  <p className="mt-4 text-green-500 text-sm text-center">{success}</p>
                )}
                 {isOtpSendCicked && <div className="mb-3 mt-3">
                <label htmlFor="otp" className="form-label">
                {t('otp')}
                </label>
                <div className="flex justify-center my-2">
               {otp?.map((digit,index)=>(
                <input
                  type="text"
                  style={{maxWidth:"40px"}}
                  key={index}
                  className="form-control bg-[#3A3A48]  mx-1 text-center py-2 "
                  id="otp"
                  name="otp"
                  maxLength={1}
                  value={digit}
                  required
                  autoFocus={index===0}
                  ref={(ref)=>(inputRefs.current[index]=ref)}
                  onChange={(e)=>handleOtpChange(index,e.target.value)}
                  onKeyDown={(e)=>handleKeyDown(index,e)}
                />
                ))}
                </div>
              </div>}

        
               { <button
                  type="submit"
                  className="mt-5 tracking-wide continueBtnShadow transitionC hover:scale-105 font-semibold bg-[#C2410C] text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="mx-3">{t('verify')}</span>
                  {loading && <SmallLoader/>}
                </button>}
                <p className="mt-6 text-xs text-gray-400 text-center">
                {t('already')}{" "}
                  <Link
                    to="/sign"
                    className="text-[#C2410C] border-b border-gray-500 border-dotted"
                  >
                    {t('signin')}
                  </Link>
                </p>
                <p className="mt-6 text-xs text-gray-400 text-center">
                {t('aggre')}{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                   {t('terms')}
                  </a>{" "}
                  {t('and')}{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                   {t('privacy')}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-[#0E0C15] text-center hidden lg:flex mt-24 justify-center">
          <div className="mx-16 w-full text-white">
            <GPT />
            <h2 className="text-4xl font-bold mb-4 mt-20 animate-bounce">
            {t('business')}
            </h2>
            <p className="text-lg leading-relaxed animate-pulse text-left">
            {t('simplify')}
            </p>
            <p className="mt-6 text-md text-gray-300 animate-fade-in text-right">
            {t('join')}            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
