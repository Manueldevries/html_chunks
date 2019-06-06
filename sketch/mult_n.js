const isMulti8 = (num) => num % 8 === 0 ? `${num} is truthy`
  : `${num - (num % 8)} is previous or ${num - (num % 8) + 8} is next`

console.log(
  isMulti8(4)
)