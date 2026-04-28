import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Paymentsucess() {
  return (
    <div>
      <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-10 py-10 bg-white">
      
      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-serif text-blue-600">
          Congratulations
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for shopping with Bookstore.  
          Hope you have a great experience with us.
        </p>

        <div className="flex gap-4">
          <Link to="/allbooks">
            <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2">
              Explore More Books
            </Button>
          </Link>

          <Link to="/">
            <Button color="gray" className="px-6 py-2">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="https://thumbs.dreamstime.com/b/payment-successful-template-vector-art-success-ful-206586442.jpg"
          alt="Success"
          className="w-75 md:w-100 opacity-90"
        />
      </div>
    </div>
    </div>
  )
}

export default Paymentsucess