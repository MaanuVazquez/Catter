import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CircularProgress, Grid, CardContent, CardMedia, CardHeader, Card, Icon} from '@material-ui/core/'
import styles from './styles.module.css'

export default function BreedItem({fetchImage, id, breed}) {
  useEffect(() => {
    if (!breed || breed.imageLoading || breed.image) return
    fetchImage()
  }, [breed, fetchImage])

  if (!breed) return null

  const {name, imageLoading, image, origin} = breed

  return (
    <Grid item xs={3}>
      <Link to={`/${id}`} className={styles.link}>
        <Card>
          <CardHeader title={name} />
          <div className={styles.media}>
            {imageLoading || !image ? <CircularProgress /> : <CardMedia component="img" src={image} alt={name} />}
          </div>
          <CardContent>
            Origin: <Icon>flag</Icon>
            {origin}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}
