import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, TextInput } from 'flowbite-react'
import { Label, Radio, Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { viewBooksAPI } from '../../services/allAPIs';
import { searchContext } from '../../Context/SearchContextShare';

function Allbooks() {
  const [token, setToken] = React.useState("")
  const [allBooks, setAllBooks] = React.useState([])
  // for filter create an dummy state
  const [dummyBooks,setDummyBooks]= React.useState([])
  // Search Key and import searchContext

  const{searchKey,setSearchKey}=useContext(searchContext)
  console.log(searchKey);
  
  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    viewAllBooks(searchKey)
  }, [token,searchKey])
  //  view all books
  const viewAllBooks = async (searchKey) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`

      }
      const response = await viewBooksAPI(searchKey,reqHeader)
      console.log(response);
      setAllBooks(response.data.viewBook)
      // for filter set books to our newly created dummy state
      setDummyBooks(response.data.viewBook)
    }
    catch (err) {
      console.log(err);

    }
  }
  const handleFilter = async (filter) => {
    console.log(filter);
    // filters dummyBooks state and set its value to setallbooks state
    setAllBooks(dummyBooks.filter(item=>item.category==filter))
    if(filter=="All"){
      setAllBooks(dummyBooks)
    }

  }
// const handleSearch = () => {
//     const searchitem = dummyBooks.filter(item =>
//       item.title.toLowerCase().includes(searchKey.toLowerCase().trim()))
//       setAllBooks(searchitem)
//   }
  return (
    <div className='bg-black min-h-screen'>
      <Header />

      {/* check wheather token is present or not and add all books design */}
      {
        token ?
          <section className='mt-10'>
            <h1 className='font-extrabold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600'>Collections</h1>
            {/* search bar */}
            <div className="flex flex-1 items-center justify-center p-6">
              <div className="w-full max-w-lg">
                <form  className="mt-5 sm:flex sm:items-center">
                  <TextInput   onChange={(e)=>setSearchKey(e.target.value)}  type="text" name="q" className="inline w-full p-5 rounded-md hover:transition duration-150 ease-in-out hover:scale-105 leading-5 placeholder-gray-500" placeholder="Search Here" />
                  <Button  color="purple" type="Button" className="mr-3 inline-flex  items-center justify-center rounded-md  px-4 py-2 font-medium text-white bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out">Search</Button>
                </form>
              </div>
            </div>
            {/* filters  */}
            <h1 className='mt-5 font-extrabold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 '>Filters</h1>
            <div className="row flex flex-wrap gap-2 justify-center mt-10 ">
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("All")} id="united-state" name="countries" value="USA" defaultChecked />
                <Label className='text-1xl font-bold' htmlFor="united-state">All Category</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("Literaray Fiction")} id="united-state" name="countries" value="USA" defaultChecked />
                <Label className='text-1xl font-bold' htmlFor="united-state">Literaray Fiction</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("philosophy")} id="germany" name="countries" value="Germany" />
                <Label className='text-1xl font-bold' htmlFor="germany">Philosophy</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("Thriller")} id="spain" name="countries" value="Spain" />
                <Label className='text-1xl font-bold' htmlFor="spain">Thriller</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("Romance")} id="uk" name="countries" value="United Kingdom" />
                <Label className='text-1xl font-bold' htmlFor="uk">Romance</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("Horror")} id="uk" name="countries" value="United Kingdom" />
                <Label className='text-1xl font-bold' htmlFor="uk">Horror</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("Auto Biography")} id="uk" name="countries" value="United Kingdom" />
                <Label className='text-1xl font-bold' htmlFor="uk">Auto Biography</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("Self-Help")} id="uk" name="countries" value="United Kingdom" />
                <Label className='text-1xl font-bold' htmlFor="uk">Self-Help</Label>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Radio onClick={() => handleFilter("Politics")} id="uk" name="countries" value="United Kingdom" />
                <Label className='text-1xl font-bold' htmlFor="uk">Politics</Label>
              </div>
            </div>
            <div className='text-white mt-10'>
              {/* cards */}
              <div className="row grid grid-cols-4 gap-14  justify-evenly">
                {
                  allBooks.length > 0 ?
                    allBooks.map(item => (
                       <Link to={`/viewbook/${item._id}`}>
                        <div className="col ">
                          <Card
                            className="w-70  hover:scale-105 transition"
                            imgAlt="No BookCover"
                            imgSrc={
                              item.imageUrl ?
                               item.imageUrl
                                  :
                                "https://neelkanthpublishers.com/assets/bookcover_cover.png" }
                                 theme={{
                          img: {
                            base: "w-full h-105 object-cover",
                          },
                        }}
                          >
                         
                              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                              </h5>
                          
                            <div className="mb-5 mt-2.5 flex items-center">
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                5.0
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                              <a
                                href="#"
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                              >
                                Add to cart
                              </a>
                            </div>
                          </Card>
                        </div>

                      </Link>
                    ))
                    : "no Books Found..."
                }


              </div>
            </div>

          </section>
          :
          <div className='   h-screen bg-black text-center text-white'>
            <h1 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-bold my-10'>Please Login</h1>

            <div className='flex justify-center'>
              <Link to={'/login'}>
                <Button className='' color="purple">Login</Button>
              </Link>
            </div>
          </div>

      }

      {/* colletions heading and search bar */}


    </div>
  )
}

export default Allbooks
