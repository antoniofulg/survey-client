import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { AddAccountParams, AddAccount } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AddAccountParams

  add(params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}
