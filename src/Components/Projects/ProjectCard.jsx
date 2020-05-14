import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import GitHubIcon from '@material-ui/icons/GitHub';


const ProjectCard = (props) => {

    const [flip, setFlip] = React.useState(false);

    const flipCard = () => {
        setFlip(!flip);
    }

    return (
        <Card id='projectCard' className='projectCard'>
            <CardActionArea className='projectCardInterior' onClick={() => flipCard()}>
                {
                    flip === true ?
                        <CardMedia
                            className='projectMedia'
                            image={props.pic}
                            title="check it out!"
                        />
                        :
                        <CardContent className='projectInfo'>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="p">
                                {props.date}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.desc}
                            </Typography>
                        </CardContent>
                }
            </CardActionArea>

            <CardActions style={{ justifyContent: 'space-between' }}>
                <Tooltip title='show me the code' placement='bottom'>
                    <Button size="small" color="primary">
                        <a href={props.githubLink} target='blank' id='projectLink'><GitHubIcon fontSize='small' /></a>
                    </Button>
                </Tooltip>
                <a href={props.projectLink} target='blank' id='projectLink'><Button size="small" color="primary" variant='contained'>
                    Try it out!
                </Button></a>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;