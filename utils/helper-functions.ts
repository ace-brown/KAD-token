export const truncateAddress = (address: string) => {
  const start = address.slice(0 - 4)
  const end = address.slice(-5)

  return `${start} ... ${end}`
}
