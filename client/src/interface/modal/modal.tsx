export interface IModal {
  title: string
  show: boolean
  handleSubmit: () => void
  handleClose: () => void
  children: React.ReactNode
}