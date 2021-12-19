# POKEDEX

Proyecto en React de una Pokédex consumiendo la API https://pokeapi.co/docs/v2#pokemon

## Especificaciones - Puerto: 3000
1 - Como usuario quiero poder buscar mis pokemon para agregar al equipo
2 - Como usuario quiero poder agregar y gestionar los pokemon en mi equipo

## El proyecto cubre lo siguiente:
- Consumo de servicio
- Paginado
- Filtrado por valor
- Agregar y eliminar un pokemon de un equipo
- Listar los equipos formados
# Versiones
- NODE V14
- REACT V17
- NPM V6

### `npm start`
Corre la aplicacion en modo desarollo. http://localhost:3000/.
### `npm run build`
### Dependecias utilizadas
- @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
- @chakra-ui/icons
- react-icons
- redux react-redux
- swr
- react-paginate
- react-router-dom@6
- react-dnd
- react-dnd-html5-backend

# Propuesta de mejoras
- A nivel de aplicacion
  - Seccion de favoritos: donde el usuario podra marcar que pokemones agregar a la lista de favoritos para tenerlos a la vista mas facilmente desde el home
  - Ranking de Maestros pokemon: listado ordenado por puntos ganados de la batallas

- A nivel de desarrollo
  - Uso de NextJS: para mejoras en cuanto a: Server Side Generatio para  una carga mas rapida; Page Code splitting para cargar solo lo que se necesita; y optimizacion de imagenes y scripts
  - Uso de Cypress: para testing
  - Uso de GRAPHQL: minimizar los datos a transferirse tras consumir un servicio y asi pedir los datos exactos que necesitan