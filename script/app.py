import requests
import os


username = input('Qual é p nome do Usuário? \n =>\t')

url = f'https://api.github.com/users/{username}'

response = requests.get(url)
data = response.json()

if response.status_code == 200:
    os.system('cls')
    nome = {data["name"]}
    plocation = {data["location"]}
    bio = {data["bio"]}
    followers = {data["followers"]}
    flowing = {data["following"]}

else:
   os.system('cls')
   print('@@@@@ Usuário Não Encontrado! @@@@@')
