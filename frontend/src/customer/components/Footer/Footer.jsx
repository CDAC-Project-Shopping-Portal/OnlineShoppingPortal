import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBotton>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBotton>
              Marketing
            </Button>
          </div>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBotton>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBotton>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            {" "}
            <Button className="pb-5" variant="h6" gutterBotton>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBotton>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className='pt-20' item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copy; 2025 My Company. All rights reserved.
            </Typography>
             <Typography variant="body2" component="p" align="center">
                MADE WITH LOVE IN INDIA.
            </Typography>
             <Typography variant="body2" component="p" align="center">
                Icons made by{' '}
                <Link href="" color="inherit" underline="always">Freepik</Link>{' '}
                from{' '}
                <Link href="" color="inherit" underline="always">www.flaticon.com</Link>
            </Typography>


        </Grid>

      </Grid>
    </div>
  );
};

export default Footer;
