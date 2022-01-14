

const Formatter = (price) => {
  const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

  return formatter.format(price);
}

export default Formatter