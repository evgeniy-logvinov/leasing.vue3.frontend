import { ApplicationEntity } from '~/entities'
import { Application } from '~/types'

const applications: Application[] = [
  {
    id: '1',
    state: 'CREATED',
    color: 'red',
    date: '18.02.2002',
    type: 'CAR',
  },
  {
    id: '2',
    state: 'CHECKING',
    color: 'green',
    date: '18.02.2004',
    type: 'Airplain',
  },
  {
    id: '3',
    state: 'CHECKED',
    color: 'yellow',
    date: '18.02.2006',
    type: 'Ship',
  },
]

let parsedApplications: ApplicationEntity[] = []
const refreshApplications = () => {
  parsedApplications = applications.map((app) => ApplicationEntity.parse(app))
}

class ApplicationService {
  async getApplications(): Promise<ApplicationEntity[]> {
    console.log('getApplications')
    refreshApplications()
    return Promise.resolve(parsedApplications)
  }
}

export const applicationService = new ApplicationService()
