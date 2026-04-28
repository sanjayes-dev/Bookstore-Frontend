import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Button } from 'flowbite-react'
import { CiSearch } from "react-icons/ci";
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { homeBooksAPI } from '../../services/allAPIs';

function Home() {
  const [token, setToken] = React.useState("")
  const [homeBooks, setHomeBooks] = React.useState([])
  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    HomeBooks()
  }, [token])

  const HomeBooks = async () => {
    try {
      // const reqHeader = {
      //   Authorization: `Bearer ${token}`

      // }
      const response = await homeBooksAPI()
      console.log(response);
      setHomeBooks(response.data.HomeBook)
    }
    catch (err) {
      console.log(err);

    }
  }
  return (

    <div className=' bg-black min-h-screen'>
      <Header />
      {/* background banner with image  */}
      <section className="h-[450px]">
        <div className="bg-[url(./assets/banner2.jpg)] bg-cover bg-center h-full ">
          {/* banner text */}
          <div className='relative'>
            <div className=" absolute top-30 flex flex-col w-full items-center  gap-4 ">
              <p className="text-4xl md:text-6xl font-extrabold text-white text-center"><span className='mx-95 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600'>Welcome to BookVerse</span> <br /> where every page opens a new world of imagination and knowledge</p>
              {/* search */}
              <form action="" className="max-w-120 w-full px-4">
                <div className="relative">
                  <input type="text" name="q" className="w-full border h-11 shadow p-4 rounded-full" placeholder="search" />
                  <Button type="submit" className='absolute top-0 right-0 rounded-full h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out'>
                    <CiSearch size={20} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className='mt-10'>
        {/* heading */}

        <div>
          <h2 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl'>New Arrivals</h2>
          <h2 className='text-center font-extrabold text-2xl text-white'>Explore Our Latest Collection</h2>

        </div>
        {/* cards  */}
        <div className='text-white mt-10'>
          <div className="row flex  justify-evenly ">
            {
              homeBooks.length > 0 ?
                homeBooks.map(item => (
                  <Link to={`/viewbook/${item._id}`}>

                    <div className="col ">

                      <Card

                        className="w-65  hover:scale-105 transition "

                        imgAlt="No Book Cover"
                        imgSrc={item.imageUrl}
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
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price
                          }</span>
                         
                           <Button  className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">

                              Add to cart
                           </Button>
                           
                          
                          
                        
                        </div>
                      </Card>
                    </div>
                  </Link>
                ))
                : "Nothing Here"
            }

          </div>

          <Link to="/allbooks">
            <div className='justify-items-center'>
              <Button className="bg-linear-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 mt-10 text-center hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out">
                Explore More!
              </Button>
            </div>
          </Link>



        </div>
      </section>
      {/* featured authors */}
      <section className='mt-5'>
        <div className="row text-white flex justify-evenly p-10">
          <div className="col">
            <h1 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl'>Featured Authors</h1>
            <p className='mt-4 text-justify p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis error ducimus optio natus sit, explicabo harum? Officiis iste temporibus ullam illum repudiandae sequi ab! Ducimus unde delectus laudantium quos!
              Officiis nemo odit minima saepe adipisci? Doloribus temporibus aspernatur asperiores quas illo enim maxime sint dolorem sapiente facilis, nostrum unde ipsam saepe ducimus culpa perspiciatis, praesentium labore eius! Officia, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero impedit commodi quae, quibusdam et sit perspiciatis delectus eaque illum, beatae similique quo recusandae ratione sed, nostrum vitae sequi sint amet.
              Labore reprehenderit tempore perferendis dolor et quam quod nobis, sapiente nam tempora! Voluptatem incidunt itaque laborum vero illo. Animi nulla iusto velit eius reiciendis quas facilis quae maiores! Alias, beatae!
              Quod dolorum harum nesciunt labore, nisi sunt asperiores accusamus eligendi ratione maiores culpa accusantium vel deserunt, iure commodi? Modi possimus praesentium porro aut repudiandae cupiditate nihil illum id iusto facilis?
              Dolorem cumque eius pariatur hic nesciunt recusandae, repudiandae officiis rem doloremque dolor quas iusto officia vero eaque ut dolore. Eveniet, non quisquam ipsa nesciunt recusandae quam facilis hic repellat esse?</p>
          </div>
          <div className="col">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD83xc7HfXgj4OGpO0riLvlaK6tmN8Z9heQ&s" width={"2700px"} alt="" />
          </div>
        </div>
      </section>

      {/* testimonies */}
      <section className='mt-10'>
        <div>
          <h1 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl'>Testimonies</h1>
          <p className='text-center text-2xl text-white font-extrabold'>See What Others Are Saying</p>
        </div>
        <div className='mt-4 justify-items-center p-5'>
          <img className='rounded-full' src="https://s26162.pcdn.co/wp-content/uploads/2018/01/Atwood__Margaret_copy_new.jpg360x465.918023582.jpg" alt="" width={"180px"} />
          <h2 className='text-white mt-3 text-2xl text-white font-extrabold'>Tressa Joseph</h2>
          <p className='text-white text-2xl text-justify mt-5 italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero accusamus minus cum laboriosam accusantium similique, cupiditate repudiandae, repellat sapiente nesciunt facere aspernatur, beatae incidunt in suscipit illum ipsum quod dolorum!</p>
        </div>
      </section>
    </div>
  )
}

export default Home
