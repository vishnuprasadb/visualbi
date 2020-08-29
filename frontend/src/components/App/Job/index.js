import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import defaultCompanyImage from '../../../assets/companyImage.png';

import JobService from '../../../services/jobsService';

import dummydata from './dummyData'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
    key:{
        color: "lightgreen"
    },
    details:{
        color: "darkgrey",
    }
});

const Job = () => {

    const classes = useStyles();
    const history = useHistory()

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        JobService.getJobs().then(
            res => {
                setLoading(false);
                setData(res.data.results);
            }).catch(err => {
                setLoading(false);
                setData(dummydata);
            })
    }, [])

    const handleApply = (e) => {
        debugger;
        // window.location = "https://www.google.com"
    }

    return (
        <React.Fragment>
            {
                loading ?
                (
                    <React.Fragment>
                        <Grid xs={12} item>
                            &nbsp;
                        </Grid>
                        {"Loading Jobs..."}
                    </React.Fragment>
                ):
                (
                    <React.Fragment>
                        {
                            
                                data.map(jobData=>{
                                    return (
                                        <React.Fragment>
                                            <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                component="img"
                                                alt="Company Image"
                                                maxHeight="140"
                                                maxWidth="140"
                                                image={jobData.company_logo ? jobData.company_logo : defaultCompanyImage}
                                                title={jobData.company}
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {jobData.title}
                                                </Typography>
                                                <Typography className={classes.key} color="textSecondary">
                                                    Company Name: <span className={classes.details}>{jobData.company}</span>
                                                </Typography>
                                                <Typography className={classes.key} color="textSecondary">
                                                    Company URL: <span className={classes.details}>{jobData.company_url}</span>
                                                </Typography>
                                                <Typography className={classes.key} color="textSecondary">
                                                    Location: <span className={classes.details}>{jobData.location}</span>
                                                </Typography>
                                                <Typography className={classes.key} color="textSecondary">
                                                    Type: <span className={classes.details}>{jobData.type}</span>
                                                </Typography>
                                                <Typography className={classes.key} color="textSecondary">
                                                    Posted On: <span className={classes.details}>{moment(jobData.created_at).format("LLLL")}</span>
                                                </Typography>
                                                <Grid>
                                                    &nbsp;
                                                </Grid>
                                                <Typography className={classes.key} color="textSecondary">
                                                    Job Description
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html:jobData.description}} />
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions dangerouslySetInnerHTML={{__html:jobData.how_to_apply}} />
                                        
                                            <Divider/>
                                            
                                            </Card>
                                        </React.Fragment>
                                    )
                                    }
                                )
                            
                        }
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}
export default Job;
