import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ConnectorLine1 from '../assets/images/Connector line-1.svg';
import ConnectorLine2 from '../assets/images/Connector line-2.svg';
import Number1 from '../assets/images/Number1.svg'
import Number2 from '../assets/images/Numbers2.svg'
import Number3 from '../assets/images/Numbers3.svg'
import Number4 from '../assets/images/Numbers4.svg'
import Number5 from '../assets/images/Numbers5.svg'
import Number6 from '../assets/images/Numbers6.svg'

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
    },
});

const HowItWorks = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "6px" }}>
                    <Typography sx={{ fontSize: 24, fontWeight: 500, fontFamily: "poppins" }}>How it works</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: 8 }}>
                    <Typography sx={{ fontSize: 18 }}>For Tenant</Typography>
                    <Typography sx={{ fontSize: 18 }}>For Seeker</Typography>
                    <Typography sx={{ fontSize: 18 }}>For Landlord</Typography>
                </Box>

                <Box display="flex" flexDirection="column">

                    {/* 1st */}
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                        <img src={Number1} alt='' style={{ width: 50, alignSelf: "flex-start", marginTop: 50 }} />
                        <Box textAlign="left" p={2} padding={6} width={384} marginLeft={9.5}>
                            <Typography sx={{ fontSize: 24, fontWeight: 500 }}>Post an ad</Typography>
                            <Typography sx={{ fontSize: 18, marginTop: 1 }}>
                                Lorem ipsum dolor sit amet consectetur. Elementum nunc semper aliquam
                                faucibus in. Ac suspendisse nibh tincidunt sed amet amet in. Quam ut
                                tincidunt
                            </Typography>
                        </Box>
                    </Box>

                    <img src={ConnectorLine1} alt="Description of your image" style={{ width: 692, alignSelf: "center" }} />
                    {/* 2nd */}
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                    <img src={Number2} alt='' style={{ width: 50, alignSelf: "flex-start", marginLeft: 913, marginTop: 50}} />
                    <Box textAlign="left" p={2} padding={6} marginLeft="auto" marginRight={9.5} width={384}>
                        <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
                            Receive and approve Seeker`s applications, share contact details
                        </Typography>
                        <Typography sx={{ fontSize: 18, marginTop: 1 }}>
                            Lorem ipsum dolor sit amet consectetur. Elementum nunc semper aliquam
                            faucibus in. Ac suspendisse nibh tincidunt sed amet amet in. Quam ut
                            tincidunt
                        </Typography>
                    </Box>
                    </Box>
                    <img src={ConnectorLine2} alt="Description of your image" style={{ width: 692, alignSelf: "center" }} />
                    {/* 3rd */}
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                    <img src={Number3} alt='' style={{ width: 50, alignSelf: "flex-start", marginLeft: 5, marginTop: 50 }} />
                    <Box textAlign="left" p={2} padding={6} width={384} marginLeft={9.5}>
                        <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
                            Agree on showtime and present the apartment
                        </Typography>
                        <Typography sx={{ fontSize: 18, marginTop: 1 }}>
                            Lorem ipsum dolor sit amet consectetur. Elementum nunc semper aliquam
                            faucibus in. Ac suspendisse nibh tincidunt sed amet amet in. Quam ut
                            tincidunt
                        </Typography>
                    </Box>
                    </Box>
                    <img src={ConnectorLine1} alt="Description of your image" style={{ width: 692, alignSelf: "center" }} />
                    {/* 4th */}
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                    <img src={Number4} alt='' style={{ width: 50, alignSelf: "flex-start", marginLeft: 913, marginTop: 50}} />
                    <Box textAlign="left" p={2} padding={6} marginLeft="auto" marginRight={9.5} width={384}>
                        <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
                            Propose Seeker to Landlord
                        </Typography>
                        <Typography sx={{ fontSize: 18, marginTop: 1 }}>
                            Lorem ipsum dolor sit amet consectetur. Elementum nunc semper aliquam
                            faucibus in. Ac suspendisse nibh tincidunt sed amet amet in. Quam ut
                            tincidunt
                        </Typography>
                    </Box>
                    </Box>
                    <img src={ConnectorLine2} alt="Description of your image" style={{ width: 692, alignSelf: "center" }} />
                    {/* 5th */}
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                    <img src={Number5} alt='' style={{ width: 50, alignSelf: "flex-start", marginLeft: 5, marginTop: 50 }} />
                    <Box textAlign="left" p={2} padding={6} width={384} marginLeft={9.5}>
                        <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
                            Receive approval and notify Seeker
                        </Typography>
                        <Typography sx={{ fontSize: 18, marginTop: 1 }}>
                            Lorem ipsum dolor sit amet consectetur. Elementum nunc semper aliquam
                            faucibus in. Ac suspendisse nibh tincidunt sed amet amet in. Quam ut
                            tincidunt
                        </Typography>
                    </Box>
                    </Box>
                    <img src={ConnectorLine1} alt="Description of your image" style={{ width: 692, alignSelf: "center" }} />
                    {/* 6th */}
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                    <img src={Number6} alt='' style={{ width: 50, alignSelf: "flex-start", marginLeft: 913, marginTop: 50}} />
                    <Box textAlign="left" p={2} padding={6} marginLeft="auto" marginRight={9.5} width={384}>
                        <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
                            Receive bonus or donate
                        </Typography>
                        <Typography sx={{ fontSize: 18, marginTop: 1 }}>
                            Lorem ipsum dolor sit amet consectetur. Elementum nunc semper aliquam
                            faucibus in. Ac suspendisse nibh tincidunt sed amet amet in. Quam ut
                            tincidunt
                        </Typography>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default HowItWorks;
