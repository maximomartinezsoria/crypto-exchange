import numeral from 'numeral';

function dollarFilter(value) {
  if (!value) return '$ 0';

  return numeral(value).format('($ 0.00a)');
}

function percentFilter(value) {
  if (!value) return '0%';

  return `${Number(value).toFixed(2)}%`;
}

export { dollarFilter, percentFilter };
