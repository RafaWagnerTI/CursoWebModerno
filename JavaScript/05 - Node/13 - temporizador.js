const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1!')
}, 20000)

//setImmediate -> Inicia a tarefa sem o tempo de espera
//setInterval  -> Executa a tarefa á cada intervalo

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(6,7)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando Tarefa 2!', new Date().getSeconds())
})
