import React from 'react'
import { Card } from 'antd';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { CardActionArea } from '@material-ui/core';
import Trailer from '../views/Trailer';

const { Meta } = Card;

function Moviescard(props) {
    

  return (
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={props.item.img}  />}
    
  >
      
      
      
    <Meta title={props.item.title} description={props.item.description} />
    
    
    
  </Card>
  )
}

export default Moviescard