export default function MaiorDeIdade (campo) {
    const dataNascimento = new Date (campo.value)
   if (!validaIdade) {
    campo.setCustomValidity
   }
}

function validaIdade (data) {
    const dataAtual = new Date();
    const dataMais18 = new Date (data.getUTCFullYear() + 18, data.getUTCFullMoth(), data.getUTCDate())

    return dataAtual >= dataMais18
}