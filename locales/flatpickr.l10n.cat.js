/* Catalan locals for flatpickr */


exports.weekdays = {
  shorthand: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
  longhand: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte']
};

exports.months = {
  shorthand: ['Gen', 'Febr', 'Març', 'Abr', 'Maig', 'Juny', 'Jul', 'Ag', 'Set', 'Oct', 'Nov', 'Des'],
  longhand: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre']
};

exports.ordinal = function(nth) {
  var s = nth % 100;
  if (s > 3 && s < 21) return "è";
  switch (s % 10) {
    case 1: return "r";
    case 2: return "n";
    case 3: return "r";
    case 4: return "t";
    default: return "è";
  }
};

exports.firstDayOfWeek = 1;

  
