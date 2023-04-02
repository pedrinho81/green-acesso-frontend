const defaultNotResult = 'N/A'

const  formatResult = (value: any) => {
  switch (typeof value) {
    case 'object':
      return value.name || defaultNotResult;
    case 'boolean':
      return value ? 'Yes' : 'No';
    case 'string':
      return value || defaultNotResult;
    case 'number':
      return value || defaultNotResult;
    default:
      return defaultNotResult;
  }
}

export { formatResult}