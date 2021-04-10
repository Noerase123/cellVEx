export interface IModal {
  buttonName: string
  title: string
  show: boolean
  handleSubmit: () => void
  handleClose: () => void
  children: React.ReactNode
}