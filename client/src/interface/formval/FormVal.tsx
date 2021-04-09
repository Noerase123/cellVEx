export interface IForm {
  label: string
  type: string
  placeholder: string
  value: string
  onchange: (param:any) => void
}