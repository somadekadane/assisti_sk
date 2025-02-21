/**
 * Data atulizada no rodapé
 */
function obterData() {
    const dataAtual = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        
    }
    return dataAtual.toLocaleTimeString('pt-BR', options)
}

// exercutar a função ao iniciar o app.(janela principal)
document.getElementById('dataAtual').innerHTML = obterData()