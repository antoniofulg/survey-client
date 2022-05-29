import faker from '@faker-js/faker'
import axios, { AxiosResponse } from 'axios'

export const mockHttpResponse = (): Partial<AxiosResponse<any>> => ({
  data: JSON.parse(faker.datatype.json()),
  status: faker.internet.port(),
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse())
  return mockedAxios
}
