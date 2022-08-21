import { Button, Dialog, DialogActions } from "@mui/material"
import { useCallback, useState } from "react"

type UseDialogProps = {
  content: JSX.Element | string
  okText: string
  cancelText: string
}
type UseDialogHook = [() => Promise<boolean>, () => JSX.Element]

type State = {
  isOpen: boolean
  resolve: (bool: boolean) => void
}

const initialState: State = {
  isOpen: false,
  resolve: () => {},
}
export const useDialog = (
  props: Partial<UseDialogProps> = {}
): UseDialogHook => {
  const defaultProps = { content: "", okText: "OK", cancelText: "Cancel" }
  const { content, okText, cancelText } = { ...defaultProps, ...props }
  const [state, setState] = useState<State>(initialState)
  const myConfirm = () => {
    const promise: Promise<boolean> = new Promise((resolve) => {
      const newState: State = {
        isOpen: true,
        resolve,
      }
      setState(newState)
    })
    return promise
  }
  const ok = () => {
    state.resolve(true)
    setState(initialState)
  }

  const cancel = () => {
    state.resolve(false)
    setState(initialState)
  }
  const renderDialog = useCallback(() => {
    return (
      <Dialog open={state.isOpen} maxWidth={"md"} fullWidth={true}>
        {content}
        <DialogActions>
          <Button onClick={ok}>{okText}</Button>
          <Button onClick={cancel}>{cancelText}</Button>
        </DialogActions>
      </Dialog>
    )
  }, [state.isOpen, content, okText, cancelText])
  return [myConfirm, renderDialog]
}
