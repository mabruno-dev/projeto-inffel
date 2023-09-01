fetch("clientes.json") //carregando o arquivo json 
 
.then(response => response.json()) //convertendo para um objeto json e essa conversão será passada como argumento para o próximo then

.then(clientes => {
    let table =document.getElementById("Tabelacliente") //váriavel que linka a tabela criada no html com o código java, permitindo que o javascript faça alterações
//loop para percorrer o arquivo json e colocar os elementos em seus lugares, adicionando linhas e células. 
//O primeiro let é a variavel que cria uma linha e os outros adicionam uma célula cada na tabela.Ja os comandos inner dão nome as células criadas.
    clientes.forEach(cliente=>{ 
        const line = table.insertRow()
        const cell1 = line.insertCell(0)
        const cell2 = line.insertCell(1)
        const cell3 = line.insertCell(2)
        const cell4 = line.insertCell(3)
        cell1.innerHTML = cliente.ID
        cell2.innerHTML = cliente.NOME
        cell3.innerHTML = cliente.CPF
        cell4.innerHTML = cliente.TELEFONE
    })
})