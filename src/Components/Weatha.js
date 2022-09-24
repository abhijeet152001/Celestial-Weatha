import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchAppBar from './Searchbar';
import '../styles/icon.css'

const Section = styled.section`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const BoxContainer = styled.div`
width: 30%;
height: auto;
background-color: #abdee6;
margin: 0 auto;
`
const Box = styled.div`
margin: 1rem;
width: 100%;
gap: 2rem;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
flex-direction: column;

`

const Search = styled.div`
`
const Text = styled.span`
font-size: 2rem;
`
const Temperature = styled.span`

`
const TempBox = styled.div`
border: 6px solid #737373;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
height: 5rem;
gap: 1rem;
`
const TempText = styled.span`
margin: 0.5rem;
`
const Line = styled.span`
/* height: 5rem; */
`
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=c983253398b9b5be07431b9d27978711

const Weatha = () => {
     
    const [city, setCity] = useState('Mumbai');
    const [cityView, setCityView] = useState('');
    useEffect(() => {
        const fetchApi = async() =>{
            console.log(city, 'citydata')
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0032809741ae96e262e3b3e420539ae2`
            const response = await fetch(url);
            const resJson = await response.json()
            console.log(resJson)
            setCityView(resJson.main)
        }
        
        
        
        fetchApi();
    },[city])
    
    // Getting search text data from Srearchbar.jsx
    const setCit = (search)=>{
        setCity(search)
        console.log(city)
    }
  return (
    <Section>
        <BoxContainer>
     <Box>

    
            <Search>
    <SearchAppBar cityname = {setCit}/> 

            </Search>
          {cityView ? <>
            <i className="fas fa-street-view fa-6x"></i>

            <Text>{city}</Text>
            <Temperature>{cityView.temp} °C</Temperature>
            <TempBox>
        
                    <TempText>MIN {cityView.temp_min} °C</TempText>
            
                <Line>
                <i className="fas fa-grip-lines-vertical fa-2x"></i>
                </Line>
                <TempText>MAX {cityView.temp_max} °C</TempText>

            
            </TempBox>
            </>
          : <p>Enter the valid city</p>}
            </Box>
 
        </BoxContainer>
    </Section>
  )
}

export default Weatha