## Funções são usadas quando não sabemos quantos argumentos 
# teremos na chamada de funçoes
# *args ou *var
# **kwargs** **vars

def vlsoma(*args):
    print(args)

vlsoma(1,144,12,33,12)


# Somar os valores declarados na funçao

def soma_total(*args):
    total=0
    for numero in args:
        total = numero+total
    return total

print(soma_total(32,51,35,78,56))