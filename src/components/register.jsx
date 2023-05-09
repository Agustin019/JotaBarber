import React from 'react'

export default function Register({ setEmailRegister, setPasswordRegister, handleRegister }) {

    return (
        <form 
            onSubmit={handleRegister}
        >
            <div className='mb-4'>
                <input
                    type="text"
                    placeholder='E-mail'
                    className='p-2 w-full bg-slate-200'
                    onChange={(e) => setEmailRegister(e.target.value) }
                />
            </div>
            <div className='mb-4'>
                <input
                    type="password"
                    placeholder='Contraseña'
                    className='p-2 w-full  bg-slate-200'
                    onChange={(e) => setPasswordRegister(e.target.value) }
                />
            </div>
            <div className='flex justify-center'>
                <input
                    type="submit"
                    value="Registrarse"
                    className='p-2 bg-yellow-500 text-white font-semibold rounded-xl mx-auto'
                />
            </div>
        </form>
    )
}
