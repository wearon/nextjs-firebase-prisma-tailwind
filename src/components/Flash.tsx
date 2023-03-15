import React from 'react'

//Usage:
// <Flash type="error"
//        message="Hurricane warning in this area."
//        cta={{label: "click me", onClick: () => console.log("clicked")}
//        } />

export type TFlashProps = {
    type?: 'success' | 'error' | 'warning' | 'info'
    message: string
    cta?: {
        label: string
        onClick: () => void
    }
}

export const Flash = (props: TFlashProps) => {
    const { message, cta } = props
    let type = props.type || 'info'
    let containerClass = ''
    let messageClass = ''
    let ctaClass = ''

    switch (type) {
        case 'warning':
            containerClass = 'border-amber-500 bg-amber-100'
            messageClass = 'text-amber-700'
            ctaClass = 'text-amber-700 hover:text-amber-600'
            break
        case 'error':
            containerClass = 'border-red-500 bg-red-100'
            messageClass = 'text-red-700'
            ctaClass = 'text-red-700 hover:text-red-600'
            break
        case 'success':
            containerClass = 'border-green-500 bg-green-100'
            messageClass = 'text-green-700'
            ctaClass = 'text-green-700 hover:text-green-600'
            break
        case 'info':
            containerClass = 'border-blue-500 bg-blue-100'
            messageClass = 'text-blue-700'
            ctaClass = 'text-blue-700 hover:text-blue-600'
            break
        default:
            break
    }

    if (!message) return null

    return (
        <div className={`flex items-center px-4 justify-center  border-l-4 ${containerClass}`}>
            <span className={`w-full p-4 ${messageClass}`}>{message}</span>
            {cta && (
                <div>
                    <button
                        onClick={cta.onClick}
                        className={`bg-transparent whitespace-nowrap text-sm font-medium ${ctaClass}`}
                    >
                        {cta.label}
                    </button>
                </div>
            )}
        </div>
    )
}
