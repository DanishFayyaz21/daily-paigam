import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const WacSetup = () => {

  const { website } = useParams()
  const [platform, setPlatform] = useState()

  useEffect(() => {
    const splited = website.split('_')
    setPlatform(splited[splited.length - 1])

  }, [website])

  return (
    <div id="wac-setup">
      
    </div>
  )

}

export default WacSetup
