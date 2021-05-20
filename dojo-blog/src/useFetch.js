import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const abortCont = new AbortController();


    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setTimeout(() =>{
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error('couldn\'t fetch the data')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(false)
                })
                .catch(err =>{
                    if(err.name === "AbortError"){
                        console.log("Fetch Aborted")
                    }else{
                    setError(err.message)
                    setIsPending(false)
                    }
                   
                })
        }, 1500)

        return () => abortCont.abort();
    },[url]) 
    return {data, isPending, error}
}

export default useFetch