import React from "react";
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    return (
        <h1 className="text-3xl bg-orange-500 text-center text-white">Github Followers: {data.followers}</h1>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Mukul-Sharma-1998")
    return response.json()
}