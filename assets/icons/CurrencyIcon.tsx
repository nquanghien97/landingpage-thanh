import React from 'react'

function CurrencyIcon({ width, height } : { width?: number, height?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} preserveAspectRatio="none" viewBox="0 0 1920 1896.0833" fill="rgba(255, 255, 255, 1)"> <path d="M768 1152h384v-96h-128V608H910L762 745l77 80q42-37 55-57h2v288H768v96zm512-256q0 70-21 142t-59.5 134-101.5 101-138 39-138-39-101.5-101-59.5-134-21-142 21-142 59.5-134T822 519t138-39 138 39 101.5 101 59.5 134 21 142zm512 256V640q-106 0-181-75t-75-181H384q0 106-75 181t-181 75v512q106 0 181 75t75 181h1152q0-106 75-181t181-75zm128-832v1152q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1792q26 0 45 19t19 45z"></path> </svg>
  )
}

export default CurrencyIcon