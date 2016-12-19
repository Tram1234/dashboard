/**
 * Created by vlad on 04/12/2016.
 */
import axios from "axios"

export function fetchData() {
    return function(dispatch){
        axios.get('/data')
            .then((res)=>{
                dispatch({type:"FETCH_DATA_FULFILLED", payload:res.data})
            })
            .catch((err)=>{
                dispatch({type:"FETCH_DATA_REJECTED", payload:err})
            })
    }
}
