import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { Bookmarks, Home, MenuBook } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: 'auto',
        bottom: 0,
      }}
    >
      <Toolbar sx={{ margin: '0 auto' }}>
        <Link className="iconLink" to="/">
          <IconButton color="inherit">
            <Home />
          </IconButton>
        </Link>
        <Link className="iconLink" to="/my-notes">
          <IconButton color="inherit">
            <MenuBook />
          </IconButton>
        </Link>
        <Link className="iconLink" to="/favorites">
          <IconButton color="inherit">
            <Bookmarks />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
