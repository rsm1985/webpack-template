import React from 'react'
import { Index } from '@/components/Counter'
import { StyledWrapper } from '@/components/Counter/styles'
// import Image from '@/assets/images/bg'
export const App = () => {
  return (
    <StyledWrapper>
      <h1>Hello!!</h1>
      {/* <img src={Image} alt='' /> */}
      <div>1234</div>
      <Index />
    </StyledWrapper>
  )
}
