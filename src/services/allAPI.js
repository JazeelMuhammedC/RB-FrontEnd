import commonAPI from "./commonAPI"
import server_url from "./serverUrl"


// ADD Resume API-post
export const addResumeAPI = async (resume) => {
    return await commonAPI('POST', `${server_url}/resumes`, resume)
}

// editResumeAPI

export const editResumeAPI = async(id,resume)=>{
    return await commonAPI('PUT',`${server_url}/resumes/${id}`,resume)
}

//addDownloadHistoryAPI
export const addDownloadHistoryAPI=async(resume)=>{
    return await commonAPI('POST',`${server_url}/history`,resume)
}

//GETDownloadHistoryAPI
export const getDownloadHistoryAPI=async()=>{
    return await commonAPI('GET',`${server_url}/history`,"")
}

//DeleteDownloadHistoryAPI
export const deleteDownloadHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/history/${id}`,{})
}

export const getAResumeApi=async(id)=>{
    return await commonAPI('GET',`${server_url}/resumes/${id}`,{})
}
 
