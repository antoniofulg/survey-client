import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AddAccount, SaveAccessToken } from '@/domain/usecases'
import {
  Footer,
  Input,
  LoginHeader,
  FormStatus,
  SubmitButton,
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols'

import Styles from './signup-styles.scss'

type Props = {
  validation: Validation
  addAccount: AddAccount
  saveAccessToken: SaveAccessToken
}

const SignUp: React.FC<Props> = ({
  validation,
  addAccount,
  saveAccessToken,
}: Props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirmation: '',
    passwordConfirmationError: '',
    mainError: '',
  })

  useEffect(() => {
    const { name, email, password, passwordConfirmation } = state
    const formData = { name, email, password, passwordConfirmation }
    setState({
      ...state,
      nameError: validation.validate('name', formData),
      emailError: validation.validate('email', formData),
      passwordError: validation.validate('password', formData),
      passwordConfirmationError: validation.validate(
        'passwordConfirmation',
        formData
      ),
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const isFormInvalid =
    !!state.nameError ||
    !!state.emailError ||
    !!state.passwordError ||
    !!state.passwordConfirmationError

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || isFormInvalid) return
      setState((prevState) => ({ ...prevState, isLoading: true }))
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation,
      })
      await saveAccessToken.save(account.accessToken)
      navigate('/', { replace: true })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message,
      })
    }
  }

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form
          data-testid="form"
          className={Styles.form}
          onSubmit={handleSubmit}
        >
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirme sua senha"
          />
          <SubmitButton disabled={isFormInvalid}>Cadastrar</SubmitButton>
          <Link data-testid="login-link" to="/login" className={Styles.link}>
            Voltar para login
          </Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
