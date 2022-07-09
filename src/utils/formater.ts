export const IDR_MASK = (amount: number) =>
  `${amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;

const IDN_MONTH = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export const DATE_IDN_FORMAT = (dateTime: string) => {
  const currentDate = new Date(dateTime.replace(' ', 'T'));
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${date} ${IDN_MONTH[month]} ${year}`;
};

export const BANK_NAME_MASK = (bankName: string) =>
  bankName.length <= 4
    ? bankName.toUpperCase()
    : `${bankName.charAt(0).toUpperCase()}${bankName.slice(1)}`;
