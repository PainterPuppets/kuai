export const ERRORS = {
  ARGUMENTS: {
    UNRECOGNIZED_TASK: {
      code: 'UNRECOGNIZED_TASK',
      message: 'Unrecognized task %task%',
    },
    MISSING_TASK_ARGUMENT: {
      code: 'MISSING_TASK_ARGUMENT',
      message: "The '%param%' parameter expects a value, but none was passed.",
    },
    INVALID_VALUE_FOR_TYPE: {
      code: 'INVALID_VALUE_FOR_TYPE',
      message: 'Invalid value %value% for argument %name% of type %type%',
    },
  },
  GENERAL: {
    CONTEXT_ALREADY_CREATED: {
      code: 'CONTEXT_ALREADY_CREATED',
      message: 'KuaiContext is already created.',
    },
    CONTEXT_NOT_CREATED: {
      code: 'CONTEXT_NOT_CREATED',
      message: 'KuaiContext is not created.',
    },
    RUNTIME_NOT_DEFINED: {
      code: 'RUNTIME_NOT_DEFINED',
      message: 'Kuai Runtime Environment is not defined in the KuaiContext.',
    },
    RUNTIME_ALREADY_DEFINED: {
      code: 'RUNTIME_ALREADY_DEFINED',
      message: 'Kuai Runtime Environment is already defined in the KuaiContext',
    },
    TS_NODE_NOT_INSTALLED: {
      code: 'TS_NODE_NOT_INSTALLED',
      message: `Your project uses typescript, but ts-node is not installed.

Please run: npm install --save-dev ts-node`,
    },
    TYPESCRIPT_NOT_INSTALLED: {
      code: 'TYPESCRIPT_NOT_INSTALLED',
      message: `Your project uses typescript, but it's not installed.

Please run: npm install --save-dev typescript`,
    },
  },
  BUILTIN_TASKS: {
    UNSUPPORTED_NETWORK: {
      code: 'UNSUPPORTED_NETWORK',
      message: 'Unsupported network %var%.',
    },
  },
}
