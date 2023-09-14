import {
    Typography,
    Stack,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';

import {Link} from 'wouter';

import { useQuery } from '@tanstack/react-query';

const fetchHotels = async () => {
    const res = await fetch('http://localhost:3001/hotels');
    
    if (!res.ok) {
        throw new Error('Network response was not OK');
    }

    return res.json();
};

function HotelList() {
    const {
        data: hotels,
        isLoading,
        error,
    } = useQuery({ queryKey: ['hotels'], queryFn: fetchHotels });

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Error fetching Hotels! {error.message}</div>;
    }

    return (
        <>
            <Typography variant="h4" component="h2">
                Booking App
            </Typography>
            <Stack spacing={2}>
                {
                    hotels.map(hotel => (
                        <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
                            <Card sx={{ maxWidth: 345, backgroundColor: '#E8E8E8' }}>
                                <CardMedia
                                    image={hotel.img}
                                    sx={{ height: 140 }}
                                    title={hotel.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {hotel.name}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        variant="body2"
                                    >
                                        {hotel.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">See Details</Button>
                                </CardActions>
                            </Card>
                        </Link>
                    ))
                }
            </Stack>
        </>
    );
}

export default HotelList;
