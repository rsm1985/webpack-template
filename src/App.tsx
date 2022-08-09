import React from 'react'
import { Index } from '@/components/Counter'
import { StyledWrapper } from '@/components/Counter/styles'
import Image from './assets/images/bg.png'
// import Image from '@/assets/images/bg.png'
// Can't import the named export 'Image' (imported as 'Image') from default-exporting module (only default export is available)
export const App = () => {
  return (
    <StyledWrapper>
      <h1>Hello!!!!!</h1>
      <img src={Image} alt='' />
      <div>1234</div>
      <Index />
    </StyledWrapper>
  )
}
