var rawData = [
  ['/img/causas/educacao.png', 'Educação', 'educacao', 'Resumo'],
  ['/img/causas/criancas.png', 'Crianças', 'criancas', 'Resumo'],
  ['/img/causas/saude.png', 'Saúde', 'saude', 'Resumo'],
  ['/img/causas/ambiente.png', 'Meio ambiente', 'meio_ambiente', 'Resumo'],
  ['/img/causas/esporte.png', 'Esportes', 'Resumo', 'esportes', 'Resumo'],
  ['/img/causas/frida.png', 'Arte', 'arte', 'Resumo'],
  ['/img/causas/mulheres.png', 'Mulheres', 'mulher', 'Resumo'],
  ['/img/causas/raca.png', 'Questões raciais', 'questoes_raciais', 'Resumo'],
  ['/img/causas/analfabetismo.png', 'Analfabetismo', 'analfabetismo', 'Resumo'],
  ['/img/causas/idosos.png', 'Idosos', 'idosos', 'Resumo'],
  ['/img/causas/indio.png', 'Indígenas', 'indigenas', 'Resumo'],
  ['/img/causas/fogo.png', 'Emergencias e desastres', 'desastres', 'Resumo'],
  ['/img/causas/empreendedorismo.png', 'Empreendedorismo', 'empreendedorismo', 'Resumo'],
];

function CardData(imgsrc, titulo, pathName, resumo) {
  return{
      imgsrc,
      titulo,
      pathName,
      resumo
  }
}

var cardsData = rawData.map(el => {
  return CardData(el[0], el[1], el[2], el[3])
})

export default function handler(req, res) {
    res.status(200).json(cardsData)
}