import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as HelpMeOut } from '../../assets/HelpMeOut.svg';
import { ReactComponent as VerifyIcon } from '../../assets/verify.svg';
import { ReactComponent as MedalIcon } from '../../assets/medal.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { ReactComponent as CircleIcon } from '../../assets/circle.svg';

const HomePage = () => {
  return (
    <div className='p-10'>

      <div className='flex justify-between'>

        <div className='flex gap-6'>
          <Logo />
          <div>
            <HelpMeOut />
            <div className='flex my-3'>
              <div className='flex gap-2'>
                <VerifyIcon />
                <p  className='text-[#0E75C5]'>Helpmeout.com</p>
              </div>
              <div className='flex gap-2'>
                <MedalIcon />
                <p className='text-[#0E75C5]'>Featured</p>
              </div>
            </div>
            <div className='flex '>
              <div className='flex gap-1'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <p>252</p>
                <CircleIcon className='pr-2' />  
              </div>
              <div className='text-[#0E75C5] border-x-2 border-[#606060] border-solid px-2'>
                Productivity
              </div>
              <div className='pl-2 text-[#606060]'>
                80,000+ users
              </div>
            </div>

          </div>
        </div>

        <div>
          <button className='bg-[#0E75C5] w-[166px] h-[45px] rounded-md text-white'>
            Add to Chrome
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;