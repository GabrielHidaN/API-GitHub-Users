import requests
import os

print('GitHub Users \n')

username = input('Qual é p nome do Usuário? \n =>\t')

url = f'https://api.github.com/users/{username}'

response = requests.get(url)
data = response.json()

if response.status_code == 200:
    os.system('cls')
    print(f'Nome Completo:\t {data["name"]}\n')
    print(f'Localização:\t {data["location"]}\n')
    print(f'BIO:\t {data["bio"]}\n')
    print(f'Seguidores:\t {data["followers"]}\n')
    print(f'Seguindo:\t {data["following"]}\n')

else:
   os.system('cls')
   print('@@@@@ Usuário Não Encontrado! @@@@@')
