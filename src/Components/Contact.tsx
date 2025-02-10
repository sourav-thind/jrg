"use client";
import React, { useEffect, useState } from 'react'
import { PhoneIcon, EnvelopeIcon, HomeIcon, WrenchIcon, PencilIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Toast from './Toast'
type Props = {}
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = (props: Props) => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = formData => {
    setShowToast(true);


    setTimeout(() => {
      setShowToast(false);
    }, 5000);
    emailjs.send(
      'service_yf6j49o',
      'template_n64v31o',
      {
        from_name: formData.firstName + " " + formData.lastName,
        to_name: 'JRG Kitchen and Bedroom',
        from_email: formData.email,
        to_email: 'jrgkitchenandbedroom.com',
        the_subject: formData.subject,
        message: formData.message

      },
      'wjSL_o0Va0gsAS_b9'
    ).then(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });



    }, (error) => {
      console.log(error);
      alert('Something went wrong')
    }

    )
  };

  return (
    <div >
      <div className="fixed top-[6rem] right-4 z-10 h-[10vh] text-Color1 px-4 py-2 rounded">
        {showToast && <Toast />}
      </div>
      <div className='bg-Color2  flex mx-auto justify-center  h-[90vh] md:h-[90vh]  '>

        <div className='flex flex-col items-center  space-y-8 md:space-y-2 '>
          <h1 className='tracking-[20px] text-2xl md:text-3xl text-drwht uppercase font-semibold mt-6'>Contact</h1>
          <h2 className=' text-Color1 justify-center items-center  font-semibold text-xl md:font-bold uppercase'> <span> Looking for the perfect solution?</span> <span className='decoration-Color1 underline underline-offset-4 text-drwht'> We&apos;ve got you covered.</span> </h2>
          <div className='flex flex-col md:flex-row md:pt-16 md:space-x-[8rem] lg:space-x-[12rem] ' >
            <div className='space-y-1 md:space-y-4 space-x-0 mb-4'>
              <div className='flex text-drwht text-lg space-x-5 items-center justify-center'>
                <PhoneIcon className='h-6 w-6 text-Color1' />
                <p>+44 7448 454294</p>
              </div>
              <div className='flex text-drwht text-lg  space-x-5 items-center justify-center '>
                <EnvelopeIcon className='h-6 w-6 text-Color1' />
                <p>jrgkitchenandbedroom@gmail.com</p>
              </div>
              <div className="flex justify-around items-center py-2 md:py-8 text-Color1">
                <div className="flex flex-col items-center">
                  <WrenchIcon className="w-12 h-12 text-blue-600" />
                  <p className="mt-2 text-lg font-semibold">Renovate</p>
                </div>
                <div className="w-[2px] h-28 bg-Color1 mx-8"></div>

                <div className="flex flex-col items-center">
                  <PencilIcon  className="w-12 h-12 text-blue-600" />
                  <p className="mt-2 text-lg font-semibold">Design</p>
                </div>

                <div className="w-[2px] h-28 bg-Color1 mx-8"></div>

                <div className="flex flex-col items-center">
                  <HomeIcon  className="w-12 h-12 text-blue-600" />
                  <p className="mt-2 text-lg font-semibold">Transform</p>
                </div>
              </div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 lg:space-y-4 w-[360px]' action="">
              <div className='space-x-2 flex '>
                <input className='inputbox h-12 px-2 w-[175px]'
                  type="text" required
                  placeholder='First Name'
                  {...register("firstName")}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  } />
                <input
                  placeholder='Last Name'
                  className='inputbox h-12 px-2 w-[175px]'
                  type="text"
                  {...register("lastName")}
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  } />
              </div>
              <input required
                placeholder='Email'
                className='inputbox px-2 h-12'
                type="email"
                {...register("email")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                } />
              <input
                placeholder='Subject'
                className='inputbox h-12 px-2'
                type="text"
                {...register("subject")}
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                } />
              <textarea required
                placeholder='Message'
                className='inputbox h-16 px-2'
                id="" {...register("message")}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                } />
              <button className='bg-Color1 px-4 py-2.5 rounded-md text-Color2 hover:text-xl font-semibold text-lg' >Submit</button>

            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Contact