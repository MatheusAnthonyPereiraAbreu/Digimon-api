<div align ="center">
# Projeto Angular DigimonApi
</div>

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) na versão 17.2.0.

## Configuração Inicial
Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Caso não tenha, você pode baixá-los e instalá-los no seguinte link: [Node](https://nodejs.org/en)

## Clonando o Repositório
Abra o terminal ou prompt de comando.

Navegue até a pasta onde deseja clonar o repositório.

Execute o seguinte comando para clonar o repositório:

`git clone https://github.com/MatheusAnthonyPereiraAbreu/Digimon-api.git`

Acesse a pasta do projeto:

`cd Digimon-api`

## Instalando Dependências
Após clonar o repositório e navegar até a pasta do projeto, execute o seguinte comando para instalar as dependências do projeto:

`npm install`

## Executando o Projeto Localmente
Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

`ng serve`

O projeto estará disponível em http://localhost:4200/ no seu navegador.

# Uso
Este projeto em Angular utiliza a API de Digimon para fornecer uma interface onde é possível visualizar todos os Digimons, pesquisar por nome e filtrar por nível.

## Tela Inicial
Na tela inicial do projeto, você encontrará uma lista com todos os Digimons disponíveis, juntamente com uma barra de pesquisa e um filtro de níveis.

## Lista de Digimons
A lista exibe todos os Digimons disponíveis, mostrando informações como nome, imagem e nível.

## Barra de Pesquisa
A barra de pesquisa permite que você pesquise Digimons específicos pelo nome. Ao digitar o nome do Digimon desejado, a lista será filtrada para exibir apenas os Digimons que correspondem ao termo pesquisado.

## Filtro por Níveis
Ao lado da barra de pesquisa, há um filtro que permite selecionar o nível dos Digimons que deseja visualizar. Os níveis disponíveis incluem:

-Rookie
-In training
-Champion
-Ultimate
-Mega

Ao selecionar um nível, a lista de Digimons será filtrada para exibir apenas aqueles que possuem o nível escolhido.

# Exemplo de Uso
Ao acessar a tela inicial, você verá todos os Digimons listados.
Utilize a barra de pesquisa para encontrar um Digimon específico pelo nome. Por exemplo, pesquise por "Agumon".
Se desejar, use o filtro para visualizar apenas Digimons de um nível específico, como "Champion".
Você também pode combinar a pesquisa por nome e o filtro por nível para encontrar Digimons de maneira mais precisa.
Com essas funcionalidades, o projeto permite explorar e interagir com a API de Digimon de forma fácil e intuitiva.

## Detalhes do Digimon
Ao clicar em um Digimon na lista, você será redirecionado para uma página de detalhes. Nesta página, você poderá visualizar informações detalhadas sobre o Digimon selecionado, incluindo:

Nome: O nome único do Digimon.
Nível: O nível de poder do Digimon (In-training, Rookie, Champion, Ultimate, Mega, etc.).
Imagem: Uma imagem representativa do Digimon.
Explore a lista de Digimons, pesquise por nome, filtre por nível e descubra mais sobre cada Digimon na página de detalhes. Divirta-se explorando o mundo dos Digimons!

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
