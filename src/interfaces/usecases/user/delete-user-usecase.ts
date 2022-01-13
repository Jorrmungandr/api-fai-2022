export interface DeleteUserUseCase {
  execute(userParams: DeleteUserUseCase.Params): Promise<DeleteUserUseCase.Result>;
}

export namespace DeleteUserUseCase {
  export type Params = {
    id: string;
  };

  export type Result = void;
}
