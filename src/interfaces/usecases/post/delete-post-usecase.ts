export interface DeletePostUseCase {
  execute(postParams: DeletePostUseCase.Params): Promise<DeletePostUseCase.Result>;
}

export namespace DeletePostUseCase {
  export type Params = {
    id: string;
  };

  export type Result = void;
}
