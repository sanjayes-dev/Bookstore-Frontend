import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getABooksAPI } from '../../services/allAPIs';
import Header from '../Components/Header';
import { CiShoppingCart } from "react-icons/ci";
import { TbJewishStar } from "react-icons/tb";

function Viewbook() {
    const [token, setToken] = React.useState("")
    const { id } = useParams()
    console.log(id);
    const [book, setBook] = React.useState({})
    console.log(token);

    useEffect(() => {
        setToken(sessionStorage.getItem("token"))
        getBook(id)
    }, [token])
    const getBook = async (id) => {
        try {
            const reqHeader = {
                Authorization: `Bearer ${token}`

            }
            const response = await getABooksAPI(id, reqHeader)
            console.log(response);
            setBook(response.data.book)

        }
        catch (err) {
            console.log(err);

        }
    }

   const handlePayment = async()=>{
    console.log(book);
    const stripe = await loadStripe('pk_test_51TPybHRwPjSEdsZ3Qxsp41BzbzZfHxMupw0O7opfmkY4fSu7u54vncTqcLvmZqmzgjDFhz2DsMNfotGRsM9NsvO000df7nXXQi');
    console.log(stripe);

    const token= sessionStorage.getItem("token")
    // Set req Header
    const reqHeader = {
      Authorization : `Bearer ${token}`
    };
    // Set req Body
    const reqBody = {
      bookDetails: book
    }
    try
    {
      const response = await makePaymentAPI(reqBody,reqHeader)
      console.log(response); 
      const checkoutUrl = response.data.session.url 
      window.location.href=checkoutUrl
    }
    catch(err){
      console.log(err); 
    }
  }
    return (
        <div>
            <Header/>
            <div className="bg-black py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={book.imageUrl} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button onclick={()=>handlePayment} className="bg-linear-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full text-center hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out w-full h-full"><span className='flex mt-1 place-content-center '><CiShoppingCart size={25} />Add to Cart</span></button>
                                </div>
                                <div className="w-1/2 px-2">
                                     <button className="bg-linear-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full text-center hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out w-full h-full "><span className='flex mt-1 place-content-center'><TbJewishStar size={25} />Wishlist</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{book.
                                title}</h2>
                            <p className="text-white text-1xl mb-4">
                                Author:{book.author}
                            </p>
                            <div className="flex-col mb-4 gap-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                   <span className="text-gray-600 dark:text-gray-300"> <s className='text-white'>${book.price}</s><span className='mx-4'>${book.dprice}</span></span>
                                   <br />
                                 
                                    <span className="font-bold text-gray-700 dark:text-gray-300">No of Pages:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{book.noofpages}</span>
                                    <br />
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Language:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{book.language}</span>
                                      <br />
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Publisher:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{book.publisher}</span>

                                </div>

                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                </div>
                            </div>


                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Book Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                  {book.abstract}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewbook
