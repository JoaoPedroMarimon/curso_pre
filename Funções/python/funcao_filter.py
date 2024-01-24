#Função Filter filtra elementos de uma estrutura de dados e filtra o valor que queremos encontrar

listamsita = [1,"João","Pedro", 53]

def busca(x):
    return x == 'joão'


print(list(filter(busca,listamsita)))


