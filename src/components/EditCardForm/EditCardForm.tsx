import { FC, SyntheticEvent, useCallback, useState } from 'react'
import * as Form from '@radix-ui/react-form'
import './EditCardForm.css'
import { TVehicle } from '../../constants/type'

type EditCardFormProps = {
  stateForPopup: TVehicle
  cbSubmitForm: (value: TVehicle) => void
}

const EditCardForm: FC<EditCardFormProps> = ({ stateForPopup, cbSubmitForm }) => {
  const [state, setState] = useState(stateForPopup)

  const handleChange = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      if (event.currentTarget !== event.target) return

      setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.value
      })
    },
    [state]
  )

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    cbSubmitForm(state)
  }

  return (
    <Form.Root className="FormRoot" onSubmit={handleSubmit}>
      <Form.Field className="FormField" name="name">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Form.Label className="FormLabel">Name</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter name vehicle
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="Input"
            type="text"
            value={state.name}
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="model">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Form.Label className="FormLabel">Model</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter model vehicle
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid model
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="Input"
            type="text"
            value={state.model}
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="price">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Form.Label className="FormLabel">Price</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter price vehicle
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid price
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="Input"
            type="text"
            value={state.price}
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" type="submit" style={{ marginTop: 10 }}>
          Post question
        </button>
      </Form.Submit>
    </Form.Root>
  )
}

export default EditCardForm
