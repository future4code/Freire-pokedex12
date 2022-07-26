# POKEDEX

Nome dos integrantes: 
- Pablo Carvalho de Leão Augusto
- Walison Fillipe do Nascimento Muniz
- Felipe Souza

Link do Surge: freire-pokedex12.surge.sh

O que funciona:

- Página Home mostra 20 pokémons, que são exibidos em cards que mostram seu nome, tipo, ID e uma foto. Também possui um botão para acessar a página de detalhes daquele pokémon e um botão para capturá-lo. No header há um botão para acessar a Pokédex.

- Página Pokédex mostra os pokémons capturados. Seus cards agora mostram um botão para excluir o pokémon e o header mostra um botão para voltar à página Home. Caso a Pokédex esteja vazia, uma imagem aparece.

- Página Details mostra os detalhes do pokémon: imagens dele de frente e de costas, seus status, seus 5 primeiros movimentos e os detalhes que são mostrados no card. Se o pokémon estiver adicionado na Pokédex o botão para excluir fica habilitado. Por uma questão de usabilidade, o header mostra os botões para voltar para a Pokédex e para a Home e o botão de excluir o pokémon foi movido para dentro do card de detalhes.

- O componente Card desabilita o botão de Capturar quando o pokémon já está na Pokédex.

- O componente Header fica fixo na tela quando a página é rolada e possui efeito de glassmorfismo. Ao alicar na logo o usuário vai para a página Home.

- O loader ficou top, mas ele aparece muito rápido :( . O nome dele é PokeballLoader, dá uma olhadinha nele ;) .

- Alertas customizados são exibidos quando o usuário captura ou exclui um pokémon.

- A página de erro também foi customizada.

- Os pokémons adicionados são guardados no Local Storage.

- Ao passar o mouse na parte inferior da tela, a paginação fica visível.

O que não funciona: 

- A responsividade não foi implementada.
