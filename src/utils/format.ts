type DateTimeTypes = 'en' | 'pt-br';

export const formatDate = (locale: DateTimeTypes, date: Date) => {
  return Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(date);
};

export const formatClock = (locale: DateTimeTypes, date: Date) => {
  return Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};
