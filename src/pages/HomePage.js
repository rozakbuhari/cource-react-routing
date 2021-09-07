import React from "react";
import { Paper, Tabs, Tab, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardLayout from "../layouts/DashboardLayout";

export const workspaces = [
  {
    id: "abcd123",
    name: "Workspace A",
  },
  {
    id: "acbd1234",
    name: "Workspace B",
  },
  {
    id: "dsad890890da/property",
    name: "Workspace C",
  },
  {
    id: "GODas80dad/property",
    name: "Workspace D",
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "16px 16px 0 0",
    overflow: "hidden",
  },
  content: {
    marginTop: 2,
    borderRadius: "0 0 16px 16px",
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const HomePage = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const classes = useStyles();

  return (
    <DashboardLayout>
      <Paper className={classes.paper}>
        <Tabs
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(_, newValue) => {
            setActiveTab(newValue);
          }}
          aria-label="disabled tabs example"
          variant="fullWidth"
        >
          <Tab label="Active" />
          <Tab label="Disabled" />
          <Tab label="Active" />
        </Tabs>
      </Paper>
      <Paper className={classes.content}>
        <TabPanel value={activeTab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          Item Three
        </TabPanel>
      </Paper>
    </DashboardLayout>
  );
};

export default HomePage;
