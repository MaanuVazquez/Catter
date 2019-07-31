import React, {useEffect} from 'react'
import {AppBar, Toolbar, Typography, Button, Icon, Input} from '@material-ui/core'
import {Link} from 'react-router-dom'
import styles from './styles.module.css'

export default function Header({onSearchChange, searchTerm, location}) {
  const isRoot = location.pathname === '/'

  useEffect(
    function searchTermCleanup() {
      if (!searchTerm || isRoot) return

      onSearchChange('')
    },
    [searchTerm, location, isRoot, onSearchChange]
  )

  function onSearchTermChange(e) {
    onSearchChange(e.target.value)
  }

  return (
    <AppBar className={styles.navbar} position="sticky">
      <Toolbar>
        <Typography variant="h6">Catter</Typography>
        <Link to="/" className={styles.navbarLink}>
          <Button color="inherit">
            <Icon>home</Icon>Home
          </Button>
        </Link>
        {isRoot && <Input value={searchTerm} onChange={onSearchTermChange} />}
      </Toolbar>
    </AppBar>
  )
}
