import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setTimeout(() =>{
            fetch(url)
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
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1500)
    },[url]) 
    return {data, isPending, error}
}

export default useFetch