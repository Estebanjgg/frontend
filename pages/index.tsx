import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'






const Home: NextPage = () => {
  const professores: Professor[] =[
    {
      id: 1,
      nome: "Esteban Gonzalez",
      foto:"https://github.com/Estebanjgg.png",
      descricao:"Descricação do profressor 1",
      valor_hora: 100

    },
    {
      id: 2,
      nome: "Professor 2",
      foto:"https://github.com/Estebanjgg.png",
      descricao:"Descricação do profressor 2",
      valor_hora: 200

    },
    {
      id: 3,
      nome: "Professor 3",
      foto:"https://github.com/solangelis.png",
      descricao:"Descricação do profressor 3",
      valor_hora: 300

    },
    {
      id: 4,
      nome: "Professor 4",
      foto:"https://github.com/Solangelis.png",
      descricao:"Descricação do profressor 4",
      valor_hora: 400

    }
  ]

  return (
    <Box sx={{ backgroundColor: '#f4f4f4' }}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
