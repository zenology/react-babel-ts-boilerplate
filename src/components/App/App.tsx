import React from 'react'

interface AppProps {
  name?: string
}

const App: React.SFC<AppProps> = (props) => {
  return (
    <h1>
      Hello World! <span css={{ color: 'red' }}>{props.name}</span>
    </h1>
  )
}

App.defaultProps = {
  name: 'Nom Nom Nom',
}

export default App
