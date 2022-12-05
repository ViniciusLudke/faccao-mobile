const Enum = {
  active: 1,
  inactive: 0,
  limit_page: 25,
  decimals: 3,
  servico_status_arr: [
    {id: 0, name: 'Iniciado'},
    {id: 1, name: 'Cancelado'},
    {id: 2, name: 'Finalizado'},
  ],
  servico_status: {
    iniciado: 0,
    cancelado: 1,
    finalizado: 2,
  },
  produto_servico_status_arr: [
    {id: 0, name: 'Iniciado'},
    {id: 1, name: 'Cancelado'},
    {id: 2, name: 'Finalizado'},
  ],
  produto_servico_variacao_status_arr: [
    {id: 0, name: 'Aguardando'},
    {id: 1, name: 'Pronto_envio'},
    {id: 2, name: 'Enviado'},
    {id: 3, name: 'Producao'},
    {id: 4, name: 'Pronto_retirada'},
    {id: 5, name: 'Finalizado'},
    {id: 6, name: 'Cancelado'},
  ],
  status_pagamento: {
    nao_pago: 0,
    apagar: 1,
    pago: 2,
  },
  produto_servico_status: {
    iniciado: 0,
    cancelado: 1,
    finalizado: 2,
  },
  produto_servico_variacao_status: {
    aguardando: 0,
    pronto_envio: 1,
    enviado: 2,
    producao: 3,
    pronto_retirada: 4,
    finalizado: 5,
    cancelado: 6,
  },
  arrProdutoServicoNotEdit: [1, 2],
  arrProdutoServicoVariacaoNotEdit: [5, 6],
  ArrDisableByStatus: {
    servico: [1, 2],
    produto_servico: [1, 2],
    produto_servico_variacao: [5, 6],
  },
  adicional_status_arr: [
    {id: 0, name: 'Acrescimos'},
    {id: 1, name: 'Desconto'},
  ],

  //filter
  filter_data: {
    nodate: 0,
    servicoinicial: 1,
    servicofinal: 2,
    servicoentre: 3,
    ordemservicoinicial: 4,
    ordemservicofinal: 5,
    ordemservicoentre: 6,
  },
  adicional_tipo: {
    acrescimos: 1,
    desconto: 2,
  },
  arrFilterData: [
    {
      value: 0,
      label: 'word.no-date',
    },
    {
      value: 1,
      label: 'word.ordem-servico-data-inicial',
    },
    {
      value: 2,
      label: 'word.ordem-servico-data-final',
    },
    {
      value: 3,
      label: 'word.ordem-servico-data-final-e-inicial',
    },

    // {
    //   value: 1,
    //   label: 'word.servico-data-inicial'
    // },
    // {
    //   value: 2,
    //   label: 'word.servico-data-final'
    // },
    // {
    //   value: 3,
    //   label: 'word.servico-data-entre'
    // },
  ],
};

export default Enum;
