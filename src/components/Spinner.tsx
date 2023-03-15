import React from 'react'
import { AtomSpinner } from 'react-epic-spinners'

export function Spinner() {
    return (
        <span
            className="flex flex-col items-center justify-center w-full h-full"
            style={{ height: 'calc(100vh - 60px)' }} //@Todo: use jit
        >
            <AtomSpinner animationDuration={1000} size={160} color="#1f6492" />
        </span>
    )
}
