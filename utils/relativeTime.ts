import formatDistance from 'date-fns/formatDistance'

const relativeTime = (date: Date) => `${formatDistance(Date.now(), date)} ago`

export default relativeTime
