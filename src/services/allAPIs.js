import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"

// Register API -POST(reqBOdy)

export const registerAPI=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,"")
}

// Login API- POST(ReqBody)

export const loginAPI=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,"")
}
// GoogleLogin API- POST(ReqBody)

export const googleloginAPI=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/googleLogin`,reqBody,"")
}

// Add Book API - POST
export const addBookAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addbook`,reqBody,reqHeader)
}

// View Book API- GET
export const viewBooksAPI=async(searchKey,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewbooks?search=${searchKey}`,"",reqHeader)
}
// Home Book API - GET

export const homeBooksAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/homebooks`,"","")
}

// Get a Book 

export const getABooksAPI=async(id,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getABook/${id}`,"",reqHeader)
}

// Update profile -API -PUT

export const updateUserProfileAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/updateProfile/${id}`,reqBody,reqHeader)
}

// Get All Books In Admin section = GET

export const getAllBooksAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getAllBooks/`,"",reqHeader)
}

// Get All Books In Admin section = GET

export const getAllUsersAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getAllUsers/`,"",reqHeader)
}

//Delete a Book - Delete

export const deleteABooksAPI=async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${serverURL}/api/deleteABook/${id}`,"",reqHeader)
}

// Approve Book

export const approveABooksAPI=async(id,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/approveABook/${id}`,"",reqHeader)
}
// Reject Book

export const rejectABooksAPI=async(id,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/rejectABook/${id}`,"",reqHeader)
}

// make payment 

export const makePaymentAPI= async(id,reqBody,reqHeader)=>{
   return await commonAPI('PUT',`${serverURL}/api/makepayment/${id}`,reqBody,reqHeader)
}