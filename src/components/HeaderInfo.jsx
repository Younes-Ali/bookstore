import { Link, useLocation } from 'react-router-dom'

export default function HeaderInfo() {
  const loc = useLocation();
  return (
    <>
      {
        (loc.pathname == '/auth/signin'|| '/auth/signup') ? (
          <div className='flex gap-4'>
            <Link to={'/auth/signin'}>
              <button className='p-3 bg-[#D9176C] rounded-lg'>Log in</button>
            </Link>
            <Link to={'/auth/signup'}>
              <button className='p-3 bg-[#FFFFFF] border border-[#D9176C] text-[#D9176C] rounded-lg'>Sign Up</button>
            </Link>
          </div>
        ) : (
          <div></div>
        )
      }
      
    </>
  )
}
