function multiply(a, b) {
  return a * b
}

function sum(a, b) {
  return a + b
}

function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount)
}
