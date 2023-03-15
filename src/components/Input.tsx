import React from 'react'
import { DeepRequired, FieldErrorsImpl, FieldValues, GlobalError, UseFormRegister } from 'react-hook-form'

export type TInputProps = {
    id: string
    label: string
    type: string
    autoComplete?: string
    registerOptions?: Record<string, any>
    register: UseFormRegister<any> //UseFormRegister<FieldValues>
    errors: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>> & {
        root?: Record<string, GlobalError> & GlobalError
    }
}

export function Input(props: TInputProps) {
    let err = props.errors[props.id]
    return (
        <div>
            <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="mt-2">
                <input
                    id={props.id}
                    {...props.register(props.id, props.registerOptions)}
                    type={props.type}
                    autoComplete={props.autoComplete}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {err && <p className="text-red-500 text-xs italic">{err?.message?.toString()}</p>}
            </div>
        </div>
    )
}

Input.defaultProps = {
    type: 'text',
    autoComplete: 'off'
}
