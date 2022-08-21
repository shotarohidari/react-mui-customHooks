import { Box } from "@mui/material"
import { useUserInput } from "../hooks/useSelectedInput"

const defaultInput = {
  name: "yamada",
  age: 25,
  hobby: "soccer",
  married: false,
  height: 173,
}
export const UserInputSandbox = () => {
  const [editedInput, UserInputEditor] = useUserInput(defaultInput)
  const { name, age, hobby, married, height } = editedInput
  return (
    <>
      <UserInputEditor />
      <Box>名前: {name}</Box>
      <Box>年齢: {age}</Box>
      <Box>身長: {height}</Box>
      <Box>趣味: {hobby}</Box>
      <Box>結婚は {married ? "しています" : "していません"}</Box>
    </>
  )
}
