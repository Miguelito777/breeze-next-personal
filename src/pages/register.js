import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <img src='data:image/png;base64,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'></img>
                    </Link>
                }>
                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/login"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Already registered?
                        </Link>

                        <Button className="ml-4">Register</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
