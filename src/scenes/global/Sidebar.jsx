import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isOnline, setIsOnline] = useState(true);

  const toggleStatus = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  DASHBOARD
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  iNav Labs
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Autonomous
                </Typography>
              </Box>
              {/* Online/Offline Status */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={2}
                mt={2}
              >
                <Button
                  variant={isOnline ? "contained" : "outlined"}
                  color={isOnline ? "success" : "error"}
                  onClick={toggleStatus}
                >
                  {isOnline ? "Online" : "Offline"}
                </Button>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Modes
            </Typography>
            <Item
              title="Manual"
              to="/" // Give the path here
              icon={<ImageOutlinedIcon />} // Change icon here
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Automatic"
              to="/dashboard" // Give the path here
              icon={<PlaceOutlinedIcon />} // Change icon here
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="WebRTC (RGB Image)"
              to="/team" // Give the path here
              icon={<ImageOutlinedIcon />} // Change icon here
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="WebRTC (Depth Map)"
              to="/contacts" // Give the path here
              icon={<PlaceOutlinedIcon />} // Change icon here
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="WebRTC (Bird Eye View)"
              to="/invoices" // Give the path here
              icon={<RemoveRedEyeOutlinedIcon />} // Change icon here
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="GPS Map"
              to="/invoices" // Give the path here
              icon={<GpsFixedOutlinedIcon />} // Change icon here
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
