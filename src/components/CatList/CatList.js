import React, {useEffect} from 'react'
import {Grid, Card, CardMedia} from '@material-ui/core'
import styles from './styles.module.css'

export default function CatList({fetchCats, cats, loading, error}) {
  useEffect(() => {
    fetchCats()
  }, [fetchCats])

  if (loading) return <div>Loading...</div>
  if (error) {
    console.error(error)
    return null
  }

  return (
    <Grid container>
      {cats.map((image, i) => (
        <Grid key={`kitten-${i}`} item xs={3}>
          <Card className={styles.kittenCard}>
            <CardMedia component="img" src={image} alt="kitten" />
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
