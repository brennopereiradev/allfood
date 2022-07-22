import { AppBar, Box, Button, Typography, Container, Toolbar, Link, Paper } from "@mui/material";
import { Link as  RouterLink, Outlet } from 'react-router-dom';

const BaseAdmin = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6">Admin</Typography>
                        <Box sx={{ display: 'flex', flexGrow: 1 }}>
                            <Link component={RouterLink} to="/admin/restaurantes">
                                <Button sx={{ my: 2, color: 'white' }}>Restaurantes</Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/restaurantes/novo">
                                <Button sx={{ my: 2, color: 'white' }}>Novo restaurante</Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/pratos">
                                <Button sx={{ my: 2, color: 'white' }}>Pratos</Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/pratos/novo">
                                <Button sx={{ my: 2, color: 'white' }}>Novo Prato</Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ marginTop: 1 }}>
                    <Paper sx={{ padding: 2 }}>
                        <Outlet />
                    </Paper>
                </Container>
            </Box>

        </>
    )
}

export default BaseAdmin