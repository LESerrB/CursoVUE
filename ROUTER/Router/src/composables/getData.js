import axios from 'axios'
import {ref} from "vue";

export const useGetData = () => {
    const data = ref(null);
    const loading = ref(true);
    const errorData = ref(null);

    const getData = async (url) => {
        loading.value = true;

        try{
            const res = await axios.get(url);
            data.value = res.data;
        }catch(e){
            //console.log(error);
            errorData.value = 'Error de servidor'
        }finally{
            loading.value = false;
        }
    };

    return{
        getData,
        data, 
        loading,
        errorData
    }
};