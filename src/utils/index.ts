export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, current) => {
    if (current.prices.current) {
      return (acc += current.prices.current)
    }
    return 0
  }, 0)
}
