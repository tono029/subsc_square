import type { NextPage } from 'next'
import Signup from 'src/components/Signup'
import Signin from 'src/components/Signin'

const Home: NextPage = () => {
  return (
    <div className='home-page'>
      <div className='home-text'>
        <h2>Subsc Squareは～</h2>
  
        <p>説明文</p>
      </div>

      <Signup />

      <Signin />

    </div>
  )
}

export default Home
