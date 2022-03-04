import { ApplicationColor } from './ApplicationColor'
import { ApplicationState } from './ApplicationState'

export interface Application {
  id: string
  type: string
  state: ApplicationState
  date: string
  color: ApplicationColor
}
