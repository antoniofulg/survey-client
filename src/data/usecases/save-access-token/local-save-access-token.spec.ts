import { SetStorageMock } from '@/data/test/mock-storage'
import { faker } from '@faker-js/faker'
import { LocalSaveAccessToken } from './local-save-access-token'

type SutTypes = {
  setStorageSpy: SetStorageMock
  sut: LocalSaveAccessToken
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageSpy)
  return { setStorageSpy, sut }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const { setStorageSpy, sut } = makeSut()
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
