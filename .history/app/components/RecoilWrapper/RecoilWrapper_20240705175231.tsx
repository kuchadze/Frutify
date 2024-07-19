"use client"

import { ReactNode } from "react"

interface Props {
    children:ReactNode
}

export const RecoilWrapper = (props:Props) => {
    return (
        {props.children}
    )
}

export default RecoilWrapper