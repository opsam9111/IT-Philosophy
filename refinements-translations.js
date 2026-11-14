(function () {
  const extra = {
    fr: {
      'Evidence before assumption.': 'Les données probantes avant les suppositions.',
      'Context before adoption.': 'Le contexte avant l’adoption.'
    },
    es: {
      'Evidence before assumption.': 'La evidencia antes que las suposiciones.',
      'Context before adoption.': 'El contexto antes que la adopción.'
    }
  };
  Object.keys(extra).forEach((language) => Object.assign(window.PORTFOLIO_TRANSLATIONS[language], extra[language]));
}());
