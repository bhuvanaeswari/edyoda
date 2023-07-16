import React ,{useState}from 'react'
import { AppBar, Toolbar,  Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import Logo from "../../src/header/edyoda_logo.png"

function Navbar() {
    const [coursesAnchorEl, setCoursesAnchorEl] = useState(null);
    const [programsAnchorEl, setProgramsAnchorEl] = useState(null);
    const openCourses = Boolean(coursesAnchorEl);
    const openPrograms = Boolean(programsAnchorEl);
  
    const handleCoursesMenu = (event) => {
      setCoursesAnchorEl(event.currentTarget);
    };
  
    const handleProgramsMenu = (event) => {
      setProgramsAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setCoursesAnchorEl(null);
      setProgramsAnchorEl(null);
    };
  
    return (
        <AppBar position="static" color='default' sx={{backgroundColor:"white"}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <img
              src={Logo}
              width={100}
              height={40}
              alt={""}
              style={{ marginLeft: "0px", marginRight: "10px" }}
            />
          <Button
            id="courses-button"
            aria-controls="courses-menu"
            aria-haspopup="true"
            aria-expanded={openCourses ? 'true' : undefined}
            onClick={handleCoursesMenu}
            endIcon={<ExpandMoreIcon />}
            sx={{color:"black",textTransform:"none"}}
          >
            Courses
          </Button>
          <Menu
            id="courses-menu"
            anchorEl={coursesAnchorEl}
            open={openCourses}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'courses-button',
            }}
          >
            <MenuItem onClick={handleClose}>Course 1</MenuItem>
            <MenuItem onClick={handleClose}>Course 2</MenuItem>
            <MenuItem onClick={handleClose}>Course 3</MenuItem>
          </Menu>
  
          <Button
            id="programs-button"
            aria-controls="programs-menu"
            aria-haspopup="true"
            aria-expanded={openPrograms ? 'true' : undefined}
            onClick={handleProgramsMenu}
            endIcon={<ExpandMoreIcon />}
            sx={{color:"black",textTransform:"none"}}
          >
            Programs
          </Button>
          <Menu
            id="programs-menu"
            anchorEl={programsAnchorEl}
            open={openPrograms}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'programs-button',
            }}
          >
            <MenuItem onClick={handleClose}>Program 1</MenuItem>
            <MenuItem onClick={handleClose}>Program 2</MenuItem>
            <MenuItem onClick={handleClose}>Program 3</MenuItem>
          </Menu>
  
          <div style={{ marginLeft: 'auto' }}>
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
  
            <Button color="inherit" sx={{textTransform:"none"}}>Log in</Button>
            <Button color="primary" variant='contained' >Join Now</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;