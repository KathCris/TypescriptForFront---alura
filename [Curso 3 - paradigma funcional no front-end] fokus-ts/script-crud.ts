interface Tarefa {
    descricao: string,
    concluida: boolean
}

interface StatusAplicação {
    tarefas: Tarefa[],
    tarefaSelecionada: Tarefa | null,
}


let estado: StatusAplicação = {
    tarefas: [
        {
            descricao: 'Tarefa concluída',
            concluida: true
        },
        {
            descricao: 'Tarefa pendente 1',
            concluida: false
        },
        {
            descricao: 'Tarefa pendente 2',
            concluida: false
        }
    ],

    tarefaSelecionada: null
}


function selecionarTarefa (estado: StatusAplicação, tarefa: Tarefa) : StatusAplicação {
    return {
        ...estado,
        tarefaSelecionada: tarefa === estado.tarefaSelecionada ? null : tarefa
    }
}
