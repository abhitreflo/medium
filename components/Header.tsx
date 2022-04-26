import Link from "next/link"

function Header() {
  return (
    <div className='mb-4 bg-yellow-100 '>
      <div className='flex justify-between font-semibold p-2 max-w-7xl mx-auto '>
      <div className='flex space-x-5'>
          <Link href="/">
              <img className="w-20  object-contain cursor-pointer"
              src="https://cdn.iconscout.com/icon/free/png-256/medium-logo-3610097-3014862.png" alt="logo" />
          </Link>
          <div className="hidden sm:inline-flex space-x-5 items-center">
              <h3>About</h3>
              <h3>Contact</h3>
              <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
          </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600'>
        <h3>Sign In</h3>
        <h3 className="border rounded-full py-1 px-4 border-green-600">Get Started</h3>
      </div>
      </div>
    </div>
  )
}

export default Header
