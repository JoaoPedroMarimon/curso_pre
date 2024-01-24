# Funcoes decoradoras potencializam ou modificam a logica de outra funçao ou metodo

# Uma funcao decoradora é quando utulizamos o @ em cima de uma funçao

def master(msg):
    def imprime():
        print('esse é a funçao decoradora')
    msg()
    return imprime

## criar uma funçao que vai receber e decoradora
@master
def chama_funcao():
    print("Esta esta chamando a funcao REAL")

chama_funcao()