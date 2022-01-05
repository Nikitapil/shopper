import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false)

    const fetching = async () => {
        
        try {
            setIsloading(true)
            await callback()
        } catch (e) {
            setIsError(true)
        }
        finally {
            setIsloading(false)
        }
    } 

    return [fetching, isLoading, isError]
}