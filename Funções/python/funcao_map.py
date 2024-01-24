# A funcao Map tem como objetivo aplicar uma funcao ou uma açao em todos de uma estrutura de dados retornando uma nova sequencia ou resultado

import math






lista = [1,5,3,15,78]


def soma(x):
    return x+2

print(list(map(soma,lista)))

print(list(map(math.sqrt,lista)))


