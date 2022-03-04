import { ApplicationColor } from './ApplicationColor'
import { ApplicationState } from './ApplicationState'

export interface IApplication {
  id: string
  type: string
  state: ApplicationState
  date: string
  color: ApplicationColor
  displayState: string
}
