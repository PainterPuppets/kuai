export class NonExistentException extends Error {
  constructor(path: string) {
    super(`The ${path} does not exist in state`)
  }
}

export class NonStorageInstanceException extends Error {
  constructor() {
    super(`Storage instance should be initialized`)
  }
}

export class UnexpectedTypeException extends Error {
  constructor(type: string) {
    super(`Unexpected type: ${type} in storage`)
  }
}

export class UnexpectedMarkException extends Error {
  constructor(mark: string) {
    super(`Unexpected mark: ${mark} in storage`)
  }
}

export class UnexpectedParamsException extends Error {
  constructor(params: string) {
    super(`Unexpected params with ${params} when calling deserialize`)
  }
}

export class NoSchemaException extends Error {
  constructor(type: string) {
    super(`No schema setting with ${type}`)
  }
}

export class NonExistentCellException extends Error {
  constructor(outPoint: string) {
    super(`${outPoint} cell is not exist in store`)
  }
}

export class UnmatchLengthException extends Error {
  constructor(type: string, actual: number, expected: number) {
    super(`Actual length is ${actual}, but expected length is ${expected} in ${type}`)
  }
}

export class UnknownMoleculeTypeException extends Error {
  constructor(type: string) {
    super(`Unexpected molecule type with ${type} when create codec`)
  }
}

export class NoCodecForMolecueException extends Error {
  constructor() {
    super(`No codec for serialize or deserialize`)
  }
}

export class UnionShouldOnlyOneKeyException extends Error {
  constructor() {
    super(`Molecule union type should only have one key for pack`)
  }
}
