import React from 'react'
import Header from './component/header.jsx'
import './style/app.css'
import Article from './component/article.jsx'
import data from './component/data.jsx'

function App(){
  const travelCard=data.map((entry)=>{
    return <Article key={entry.id}
    {...entry}
    />
  })
  return (
    <div  className="App bg-gray-100 mt-0">
      <Header/>
      <span className='flex justify-center sm:gap-2 flex-wrap'>
      {travelCard}
      </span>
    </div>
  )
}
export default App
