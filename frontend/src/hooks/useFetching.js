import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            setError('')
            await callback(...args)
        } catch (e) {
            if (e.response && e.response.status === 404) {
                setError('Not found'); // Set specific error message for 404
            } else {
                setError(e.message); // Set general error message
            }
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}