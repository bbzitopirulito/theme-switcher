import React from 'react'
  
import Button from './Button.js'

const ThemeSwitcher = ({toggleTheme}) => (
    <Button onClick={toggleTheme}>Alterar tema</Button>
);

export default ThemeSwitcher