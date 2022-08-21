import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material"
import { useCallback, useState } from "react"

type User = {
  name: string
  age: number
  height: number
  hobby: string
  married: boolean
}

type UseUserInputHook = [User, () => JSX.Element]
export const useUserInput = (props: User): UseUserInputHook => {
  const [name, setName] = useState(props.name)
  const [age, setAge] = useState(props.age)
  const [height, setHeight] = useState(props.height)
  const [hobby, setHobby] = useState(props.hobby)
  const [married, setMarried] = useState(props.married)
  const UserInput = useCallback(() => {
    return (
      <Stack spacing={3}>
        <TextField label="名前" onChange={(e) => setName(e.target.value)} />
        <TextField
          label="年齢"
          onChange={(e) => {
            setAge(Number(e.target.value))
          }}
        />
        <TextField
          label="身長(整数値)"
          onChange={(e) => {
            setHeight(Number(e.target.value))
          }}
        />
        <TextField label="趣味" onChange={(e) => setHobby(e.target.value)} />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={married} />}
            label="married"
            onChange={() => setMarried(true)}
          />
          <FormControlLabel
            control={
              <Checkbox checked={!married} onChange={() => setMarried(false)} />
            }
            label="single"
          />
        </FormGroup>
      </Stack>
    )
  }, [married])
  return [{ name, age, height, hobby, married }, UserInput]
}
