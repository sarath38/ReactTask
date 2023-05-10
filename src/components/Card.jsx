import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

function CardComponent(props) {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
        })(({ theme, expand }) => ({
          transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
      }));
      return (
        <Card sx={{ maxWidth: 345 }}>         
        <CardMedia
          component="img"
          height="194"
          image={props.item.imageUrl}
          alt="Paella dish"
        />
  
        <CardHeader
          title={props.item.title}
        />
  
        <CardContent>
          <Typography variant="body2" color="text.primary" paragraph>
              <span className="meta-primary_label">Ranking:</span>
              <span className="meta-primary_value">{props.item.rank}</span>
            </Typography>
            <Typography className="meta_date" paragraph>
              <span className="meta-rank">Release Date:</span>
              <span className="meta-rank_value">{props.item.releaseDate}</span>
            </Typography>
        </CardContent>
  
        {/* Expand State Meta Data */}
  
        <CardActions disableSpacing>
          <ExpandMore
            expand={props.expanded}
            onClick={() => props.onClick(props.index)}
                aria-expanded={props.expandedId === props.index}
                aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
  
        <Collapse in={props.expandedId === props.index} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className="meta_desc" paragraph>Synopsis:</Typography>
            <Typography className="meta_desc_txt" paragraph>
            {props.item.synopsis}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }  
  export default CardComponent;