import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid2,
  Typography,
  CardActionArea,
} from '@mui/material';
import React, {useContext, useEffect, useState} from 'react';
import Context from '../Context';
import {getUser} from '../services/UsersService';

function Profile() {
  const context = useContext(Context);
  const cards = ['Stats', 'Top Concerts', 'Concert Media'];
  const [selectedCard, setSelectedCard] = useState('Stats');
  const [pfp, setPfp] = useState(require('./../samplepfp.jpg'));
  const [userDetails, setUserDetails] = useState({
    _id: '',
    username: '',
    created: '',
    displayName: '',
    lastUpdated: '',
    profilePic: '',
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const data = await getUser('lcmonademouth').then(response => {
        console.log(response);
        setUserDetails(response.data);
      });
    } catch (error) {
      console.log('Failed to fetch user data: ', error);
    }
  };

  return (
    <>
      <Box
        sx={{
          margin: '0, 5, 5, 5',
          flexGrow: 1,
          display: 'flex',
          height: '100vh',
        }}>
        <Grid2 container spacing={0}>
          <Grid2
            xs
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Avatar
              src={pfp}
              sx={{
                width: 150,
                height: 150,
                display: 'flex',
                justifySelf: 'center',
                margin: 1,
              }}
            />
            <Typography
              sx={{display: 'flex', justifyContent: 'center', margin: 1}}>
              {userDetails.displayName}
            </Typography>
            <Typography
              sx={{display: 'flex', justifyContent: 'center', margin: 1}}>
              {'@' + userDetails.username}
            </Typography>
            {cards.map((card, index) => (
              <Card
                sx={{
                  width: '100%',
                  elevation: 0,
                  boxShadow: 'none',
                  borderRadius: 0,
                }}>
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? '' : undefined}
                  sx={{
                    width: '100%',
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}>
                  <CardContent sx={{width: '100%'}}>
                    <Typography component="div">{card}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Grid2>
          <Divider orientation="vertical" flexItem></Divider>
          <Grid2 xl sx={{alignItems: 'center'}}>
            <Typography sx={{display: 'flex', justifyContent: 'center'}}>
              lalalallala
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default Profile;
