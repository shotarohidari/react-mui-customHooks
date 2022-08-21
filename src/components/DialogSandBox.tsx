import { Box, Button, Container, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { useDialog } from "../hooks/useDialog"

const Content = () => {
  const [deleting, setDeleting] = useState(false)
  const [sign, setSign] = useState("")
  return (
    <Container>
      <Stack spacing={3} textAlign="center">
        <Box>りんご</Box>
        <Box>バナナ</Box>
        <Box>みかん</Box>
        <Box>田中</Box>
        <TextField
          label="署名欄"
          placeholder="ここに削除と入力"
          onChange={(e: any) => {
            setSign(e.target.value)
            setDeleting(e.target.value === "削除")
          }}
        />
        <Button disabled={!deleting}>削除云々間ぬん</Button>
      </Stack>
    </Container>
  )
}
export const DialogSandBox = () => {
  const [confirmDialog, renderDialog] = useDialog({ content: <Content /> })
  const handleConfirm = async () => {
    const bool = await confirmDialog()
    if (bool) {
      alert("OK!")
    } else {
      alert("Cancelled!")
    }
  }
  return (
    <Box>
      <Button onClick={handleConfirm}>ダイアログを出現させる</Button>
      {renderDialog()}
    </Box>
  )
}
