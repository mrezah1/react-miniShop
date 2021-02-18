import { useState } from 'react'
import Input from '../Ui/Input'
import Wrapper from '../../hoc/Wrapper'
import Button from '../Ui/Botton'
import Icon from '../../help/Icon'
import './style.css'

const FinalInfo = ({ back, closer, submit }) => {
  const [forms, setforms] = useState({
    fullName: {
      type: 'text',
      placeHolder: 'Enter FullName...',
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    phoneNumber: {
      type: 'text',
      placeHolder: 'Enter PhoenNumber...',
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    email: {
      type: 'text',
      placeHolder: 'Enter Email...',
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      used: false,
    },
    address: {
      type: 'textarea',
      placeHolder: 'Enter Location...',
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      used: false,
    },
  })
  const changeInputHandler = (event, id) => {
    const newForms = { ...forms }
    newForms[id].value = event.target.value
    setforms((prev)=>{
      console.log(prev)
      return newForms
    })
  }
  const validation = (key) => {
    const newForm = { ...forms }
    const input = newForm[key]
    input.validation.required && (input.valid = input.value.trim() !== '')
    input.used = true
    newForm[key] = input
    setforms(newForm)
  }
  const saveDataHandler = () => {
    const isValid = !Object.keys(forms).some((input) => !forms[input].valid)
    if (isValid) {
      const data = Object.entries(forms).reduce(
        (acc, [obj, input]) => ({ ...acc, [obj]: input.value }),
        {},
      )
      submit(data)
    }
  }
  return (
    <div className="final-info">
      <h4 className="mb-4">Final Info</h4>
      <Button type="cancle" cls="back-btn custom-flex" click={back}>
        <Icon name="arrowLeft" />
      </Button>
      {Object.entries(forms).map(([key, config]) => (
        <Input
          key={key}
          cls={`mt-3 ${!config.valid && config.used && 'border-danger'}`}
          type={config.type}
          plc={config.placeHolder}
          value={config.value}
          onBlur={() => validation(key)}
          onChange={(e) => changeInputHandler(e, key)}
        />
      ))}
      <div className="text-right mt-4">
        <Button click={closer} type="cancle" cls="mr-2">
          Cancle
        </Button>
        <Button click={saveDataHandler} type="ok" cls="fh">
          Submit
        </Button>
      </div>
    </div>
  )
}
export default FinalInfo
