def saudacao(**kwargs):
    print(kwargs)

## Chamar a funcao
    
saudacao(manha='bom dia', tarde='Boa Tarde', noite='Boa noite')

def saudacoes_dia(**kwargs):
    for hora,saudacao in kwargs.items():
        print(f'Durante a {hora} dizemos {saudacao}') 

saudacoes_dia(manha='bom dia', tarde='Boa Tarde', noite='Boa noite')