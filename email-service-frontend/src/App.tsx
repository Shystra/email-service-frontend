

import { ChangeEvent, useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react';

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>

          <PrimaryInput
            value={email}
            onChange={handleChange}
            name="firstName"
            label="Nome"
            placeholder='Lucas'

          />
          <PrimaryInput
            value={firstName}
            onChange={handleChange}
            name="secondName"
            label="Sobrenome"
            placeholder='Souza'

          />
        </div>
        <Spacer height="8"/>


        <PrimaryInput
          value={secondName}
          onChange={handleChange}
          name="email"
          label="Digite o seu e-mail"
          placeholder='suporte@exemplo.com'

        />
        <Spacer height="8"/>
        <Button colorScheme='green' width="100%" >Enviar</Button>
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
