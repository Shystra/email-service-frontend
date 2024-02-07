

import { ChangeEvent, useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react';
import { UseIdentityMutation } from './hooks/UseIdentityMutation';

function App() {
  const { mutate,  } = UseIdentityMutation()
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value)
  // }

  const submit = () => {
    mutate({
      email,
      firstName,
      secondName: secondName
    })
  }

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>

          <PrimaryInput
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label="Nome"
            placeholder='Lucas'

          />
          <PrimaryInput
            value={secondName}
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder='Souza'

          />
        </div>
        <Spacer height="8"/>


        <PrimaryInput
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Digite o seu e-mail"
          placeholder='suporte@exemplo.com'

        />
        <Spacer height="8"/>
        <Button colorScheme='green' width="100%" onClick={submit}>Enviar</Button>
      </form>

      <Spacer width="6" maxWidth="4"/>
      <div className='product-details'>
        <h2>Assinatura Mensal</h2>
        <Spacer height="4"/>
        <p>Você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer height="4"/>
        <p>Regas: containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
    </div>
  )
}

export default App
