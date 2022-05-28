import type { NextPage } from 'next'
import Signup from 'src/components/Signup'
import Three from 'src/components/Three'

const Home: NextPage = () => {
  return (
    <div className='home-page'>
      <div className='home-text'>
        <h2>Subsc Squareは～</h2>
  
        <p>説明文</p>
      </div>

      <Three />

      <Signup />

    </div>
  )
}

export default Home
