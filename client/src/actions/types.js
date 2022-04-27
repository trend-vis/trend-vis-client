const createActionTypes = (base, actions = []) => actions.reduce((acc, type) => {
  acc[type] = `${base}_${type}`
  return acc
}, {})

export const ITEM = createActionTypes('ITEM', [
  'GET',
])

export default ITEM
