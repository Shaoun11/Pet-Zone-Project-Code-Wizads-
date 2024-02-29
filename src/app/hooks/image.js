import axios from 'axios';
const photoUpload_key='ae0a52622a154abe4ac340d7a976782a'
export  const imageUpload = async image => {
  const formData=new FormData()
  formData.append("image",image )
  const {data}=await axios.post(
   `https://api.imgbb.com/1/upload?key=${photoUpload_key}`,formData
  )
  return data;
};

