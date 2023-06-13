
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'


dayjs.extend(isBetween)

const ValidateActive = (InitialDate, FinalDate) => {
  const currentDate = dayjs()
  const startDate = dayjs(InitialDate)
  const endDate = dayjs(FinalDate)

  console.log('checho utils currentDate', currentDate);
  console.log('checho utils startDate', startDate );
  console.log('checho utils endDate', endDate );

 return currentDate.isBetween(startDate, endDate, 'ms', '[]')
}

export default ValidateActive
