import React from 'react'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import { Lessons10Component } from './styles'
import { ButtonView } from './styles'
import { useState } from 'react'
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Lesson10 = () => {
    const [catFact, setCatFact] = useState<string[]>([])
    const [loading, setLoading] = React.useState(false);

    const getCatFact = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json()
        console.log(data);

        if (!response.ok) {
          throw Object.assign(new Error('API error'), {error: data})
        } else {
          console.log(data.fact)
          setCatFact([data.fact, ...catFact])
        }
        
      } catch(error) {
        console.log('Error');
        
      } finally {
        setLoading(false);
      }
      }

      useEffect(()=>{getCatFact()}, [])


      
  return (
    <Lessons10Component>
      <Card facts={catFact} />
      <ButtonView>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Button name='Get Fact' onClick={getCatFact} disabled={loading} />
          {loading && (<CircularProgress 
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}  />)}
        </Box>
        <Button name='Delete' onClick={() =>{setCatFact([])}} disabled={loading} />
      </ButtonView>
    </Lessons10Component>
  )
}


export default Lesson10