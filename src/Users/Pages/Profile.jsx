import React from 'react'
import Header from '../Components/Header'
import { Button, TabItem, Tabs ,Label } from "flowbite-react";
import Editprofile from '../Components/Editprofile';
import { Card } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import {addBookAPI} from "../../services/allAPIs"
function Profile() {
  const[bookDetails,setBookDetails] = React.useState({
    title:"",
    author:"",
    noofpages:"",
    imageUrl:"",
    price:"",
    dprice:"",
    abstract:"",
    publisher:"",
    language:"",
    isbn:"",
    category:"",
    userMail:"",
    UploadedImages:[]
  })
  // holds image url
  const [preview,setPreview] = React.useState("")
   // holds image urls
   const [previewList,setPreviewList] = React.useState([])
  const handleAddBook =async()=>{
    console.log(bookDetails);
    const{title,author,noofpages,imageUrl,price,dprice,abstract,publisher,language,isbn,category,UploadedImages}=bookDetails
    if(title && author && noofpages && imageUrl && price && dprice && abstract && publisher &&language && isbn && category && UploadedImages){

      try{
        let token = sessionStorage.getItem("token")
        const reqHeader ={
          Authorization:`Bearer ${token}`
        }
        const reqBody =new FormData()
        for(let key in bookDetails){
          if(key!="UploadedImages"){
            reqBody.append(key,bookDetails[key])
          }
          else{
            bookDetails.UploadedImages.forEach(item=>(reqBody.append("UploadedImages",item)))
          }
        }
        const response = await addBookAPI(reqBody,reqHeader)
        console.log(response);
        if(response.status===200){
          alert(response.data.message)
        }
        
      }
      catch(err){
        console.log(err);
        alert("error while adding the book")
        
      }
    }
    else{
      alert('please fill the form')
    }
  }
  const handleUpload = async(e)=>{
    console.log(e.target.files[0]);
    let imgArray = bookDetails.UploadedImages
    if(imgArray.length<3){
      imgArray.push(e.target.files[0])
    }

    // to store to state
    setBookDetails({...bookDetails,UploadedImages:imgArray})
      // show the uploaded image in image section
    let imgUrl = URL.createObjectURL(e.target.files[0])
    console.log(imgUrl);
      //saving the image url to preview section
      setPreview(imgUrl)
      // adding images to array to itrate and show in front end 
      let imageListArray = previewList
      if(imageListArray.length<3){
        imageListArray.push(imgUrl)
      }
     
      setPreviewList(imageListArray)
      console.log(previewList);
      
    
    
    
  }
  return (
    <div className='bg-black min-h-screen'>
      {/* profile */}
      <Header/>
      <section className='mt-10'>
         <div className="w-full mx-auto">
   

    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-200">
      <div className="relative h-48 bg-gradient-to-r from-cyan-400 to-fuchsia-600">
        {/* <img src=""/> */}
        <div className="absolute -bottom-12 left-6">
          <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="Profile" className="w-24 h-24 rounded-xl object-cover border-4 border-white dark:border-gray-800 shadow-lg"/>
        </div>
      </div>

      <div className="pt px-6 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">user</h1>
           
          </div>
          <div
            className=" "
          >
            <Editprofile/>
          </div>
        </div>

        <p className="mb-10 text-gray-600 dark:text-gray-300">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum alias temporibus architecto enim! Necessitatibus, natus! Iste blanditiis aliquid nulla nemo, asperiores eveniet quaerat repudiandae nostrum minima aperiam, adipisci accusantium.
         Temporibus beatae, deserunt dolores maxime nesciunt culpa cupiditate commodi illo quidem? Culpa, quos ut? Earum temporibus, ratione suscipit consequuntur officia rerum rem cupiditate! Deleniti repudiandae quod reiciendis deserunt officia dolore.
        </p>
      </div>
        {/* tabs */}
        <div className=''>
       <Tabs aria-label="Pills" variant="pills" className='justify-center'>
      <TabItem active title="Sell Book">
        {/* upload form */}
        <div>
            
  <div className="mt-3 text-center text-4xl font-bold text-white">Book Details</div>
  <div className="p-8">
    <div className="flex gap-4">
      <input   onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="Name" name="tittle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Tittle" />
      <input onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Publisher" />
    </div>
    <div className="my-6 flex gap-4">
      <input onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Language" />
     <input onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Author" />
    </div>
    <div className="my-6 flex gap-4">
      <input onChange={e=>setBookDetails({...bookDetails,noofpages:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="No of pages" />
     <input onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="ISBN" />
    </div>
    <div className="my-6 flex gap-4">
      <input onChange={e=>setBookDetails({...bookDetails,imageUrl:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Image Url" />
     <input onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Catogory" />
    </div>
    <div className="my-6 flex gap-4">
      <input onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Price" />
     <input onChange={e=>setBookDetails({...bookDetails,dprice:e.target.value})} type="text" name="publisher" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Discount Price" />
    </div>
    <div className="my-6 flex gap-4">
      <div>
         <textarea onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} name="textarea" id="text" cols="30" rows="10" className="mb-10 h-40 w-[640px] resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"placeholder='Abstract'></textarea>
      </div>
    
    <div className=''>
      <div className="py- bg- ">
    <div className=" rounded-lg overflow-hidden ">
        <div className="md:flex">
            <div className="w-[630px] ">
                <div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-purple-700 bg-gray-100 flex justify-center items-center">

                 
                    <Label>
                       <div className="">
                    
                    <div className="flex flex-col items-center">
                     
                    <span className="block text-gray-400 font-normal">Attach you files here</span>
                    </div>
                  </div>
                        <input onChange={(e)=>handleUpload(e)} type="file" className="h-full w-full hidden" name=""/>
                          {
          preview ?
          <div className='flex justify-evenly items-center'> 
           {previewList.length <3 ?  <div className='flex justify-evenly items-center'>
            <img src={preview} className='h-50' alt="" width={'100px'}/> <img src="https://static.vecteezy.com/system/resources/previews/010/794/780/original/add-button-3d-icon-png.png" alt=""  width={'50px'}/>
           </div> : "" }
          
          </div>
          :    <i className="fa fa-folder-open fa-4x text-purple-700 "></i>
         }

         {
          preview &&  previewList.length<=3 ? 
             <div className='flex justify-evenly items-center'>
             { previewList.map(item=> <img src={item} width={'100px'}/>)}
            </div>:""
           
         }
                    </Label>
                  

                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
    <div className="text-center flex gap-4">
      <div>
       <Button onClick={handleAddBook}>
        Submit
       </Button>
        </div>
      <div>
        <Button>
          Reset
        </Button>

      </div>
    </div>
  </div>
        </div>
      </TabItem>
      <TabItem title="Book Status">
       {/* cards  */}
       <div>
         <Card className=""  verical>
          <div className='flex justify-between'>
                <div>
             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Long walk to Freedom
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       $200
       <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" srcset="" width={"50px"} />
      </p>
          </div>
          <div className='shrink-0'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BzJ80DaKE77ahFfnwsttMG3I2ouue8C6gg&s" alt="" srcset="" />
           <Button color="red" className='mt-3 justify-self-end'><MdDelete /></Button>
          </div>
          </div>
        
     
    </Card>
       </div>
      
      </TabItem>
      <TabItem title="Purchase History">
        {/* cards  */}
       <div>
         <Card className=""  verical>
          <div className='flex justify-between'>
                <div>
             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Long walk to Freedom
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       $200
      
      </p>
       <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" srcset="" width={"50px"} />
       <p className='text-white text-justify mx-5  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro facere cupiditate corporis ad fuga magni facilis officiis error suscipit dolores velit reprehenderit modi culpa necessitatibus, et vitae? Inventore, nihil eum!
       Possimus fugit maxime, laudantium necessitatibus officia ipsum tempore quaerat iste perferendis nemo corrupti et tenetur. Aliquid modi ratione molestias aut eligendi aliquam. Rem rerum nam nobis odio voluptates odit recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet quisquam alias dolores ab dolorum. Ipsa ducimus, est repudiandae facere, ratione provident in quibusdam quis, facilis earum odit reiciendis dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iusto, quae nobis voluptatum, architecto fuga debitis reiciendis laborum doloribus voluptatibus sunt dignissimos libero unde id nam ab eum dolor recusandae!</p>
          </div>
          <div className='shrink-0'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BzJ80DaKE77ahFfnwsttMG3I2ouue8C6gg&s" alt="" srcset=""  />
           <Button color="red" className='mt-3 justify-self-end'><MdDelete /></Button>
          </div>
          </div>
        
     
    </Card>
       </div>
      </TabItem>
    </Tabs>
    </div>
    </div>
    
  </div>
    
      </section>
    </div>
  )
}

export default Profile
