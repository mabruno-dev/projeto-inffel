#importando todas as bibliotecas necessárias
import sqlite3
import json

database = sqlite3.connect('banco.db') #conectando o banco de dados com o meu programa
cursor = database.cursor() #objeto criado para poder realizar todos os comendos com o sqlite
costumers = cursor.execute ("SELECT * FROM CLIENTES limit 1") #comando para pegar apenas a primeira linha do banco de dados

costumers_list = costumers.fetchone()
json_list = []

data_dict = {
    "ID" : costumers_list[0],
    "NOME" : costumers_list[1],
    "CPF" : costumers_list[2],
    "TELEFONE" : costumers_list[3]
}

json_list.append(data_dict)

#escrevendo o objeto json no arquivo
with open('clientes.json', 'w') as archive:
    json.dump(json_list, archive, indent = 4)