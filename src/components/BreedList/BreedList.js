import React, {useEffect} from 'react'
import BreedItem from '../BreedItem'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import styles from './styles.module.css'

export default function BreedList({fetchBreeds, loading, error, breeds, fetched}) {
  useEffect(() => {
    if (fetched) return
    fetchBreeds()
  }, [fetchBreeds, fetched])

  if (error) {
    console.error(error)
    return null
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress variant="indeterminate" size={50} />
      </div>
    )
  }

  return (
    <Grid container direction="row" justify="center" spacing={4}>
      {Object.values(breeds).map(breed => (
        <BreedItem key={breed.id} id={breed.id} />
      ))}
    </Grid>
  )
}
