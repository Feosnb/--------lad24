
let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье`;



console.log (str.replace(/ПОНЕДЕЛЬНИК/g , `MONDAY`).replace(/ВТОРНИК/g , `TUESDAY`).replace(/СРЕДА/g , `WEDNESDAY`).replace(/ЧЕТВЕРГ/g , `THURDAY`).replace(/ПЯТНИЦА/g , `FRIDAY`).replace(/СУББОТА/g , `SATURDAY`).replace(/ВОСКРЕСЕНЬЕ/g , `SUNDAY`))