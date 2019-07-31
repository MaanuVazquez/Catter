import React, {useEffect} from 'react'
import CatList from '../CatList'
import {Grid, Paper, CircularProgress, Avatar, Typography} from '@material-ui/core'
import styles from './styles.module.css'

export default function BreedDetails({breed, loading, id, fetchBreed, fetchBreedImage}) {
  useEffect(() => {
    if (breed) return

    fetchBreed()
  }, [breed, fetchBreed])

  useEffect(() => {
    if (!breed || breed.imageLoading || breed.image) return

    fetchBreedImage()
  }, [breed, fetchBreedImage])

  if (!breed || loading) {
    return (
      <div>
        <CircularProgress variant="indeterminate" size={50} />
      </div>
    )
  }

  return (
    <Grid container justify="center">
      <Grid xs={10} item>
        <Paper className={styles.paper}>
          <Avatar className={styles.breedImage} src={breed.image} />
          <Typography className={styles.breedName} variant="h4">
            {breed.name}
          </Typography>
          <Typography variant="h5">Description</Typography>
          {breed.description}
        </Paper>
      </Grid>
      <CatList breedId={id} max={20} />
    </Grid>
  )
}
