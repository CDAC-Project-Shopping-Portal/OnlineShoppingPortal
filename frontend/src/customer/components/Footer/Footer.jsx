// import React from "react";
// import { Grid, Typography, Button } from "@mui/material";
// import { Link } from "react-alice-carousel";

// const Footer = () => {
//   return (
//     <div>
//       <Grid
//         className="bg-black text-white text-center mt-10"
//         container
//         sx={{ bgcolor: "black", color: "white", py: 3 }}
//       >
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Company
//           </Typography>
//           <div>
//             {" "}
//             <Button className="pb-5" variant="h6" >
//               About
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Blog
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Press
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Jobs
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Partners
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Solutions
//           </Typography>
//           <div>
//             {" "}
//             <Button className="pb-5" variant="h6" >
//               Marketing
//             </Button>
//           </div>
//           <div>
//             {" "}
//             <Button className="pb-5" variant="h6" >
//               Analytics
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Commerce
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Insights
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Support
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Documentation
//           </Typography>
//           <div>
//             {" "}
//             <Button className="pb-5" variant="h6" >
//               Guides
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               API Status
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Legal
//           </Typography>
//           <div>
//             {" "}
//             <Button className="pb-5" variant="h6" >
//               Claim
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Privacy
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" >
//               Terms
//             </Button>
//           </div>
//         </Grid>

//         <Grid className='pt-20' item xs={12}>
//             <Typography variant="body2" component="p" align="center">
//                 &copy; 2025 My Company. All rights reserved.
//             </Typography>
//              <Typography variant="body2" component="p" align="center">
//                 MADE WITH LOVE IN INDIA.
//             </Typography>
//              <Typography variant="body2" component="p" align="center">
//                 Icons made by{' '}
//                 <Link href="" color="inherit" underline="always">Freepik</Link>{' '}
//                 from{' '}
//                 <Link href="" color="inherit" underline="always">www.flaticon.com</Link>
//             </Typography>


//         </Grid>

//       </Grid>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import { Grid, Typography, Link, Box } from "@mui/material";

// const footerLinks = {
//   Company: ["About", "Blog", "Press", "Jobs", "Partners"],
//   Solutions: ["Marketing", "Analytics", "Commerce", "Insights", "Support"],
//   Documentation: ["Guides", "API Status"],
//   Legal: ["Claim", "Privacy", "Terms"],
// };

// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: "black", color: "white", mt: 10, pt: 6, pb: 4 }}>
//       <Grid container spacing={4} justifyContent="center">
//         {Object.entries(footerLinks).map(([section, items]) => (
//           <Grid item xs={12} sm={6} md={3} key={section}>
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
//               {section}
//             </Typography>
//             {items.map((text) => (
//               <Typography
//                 key={text}
//                 variant="body2"
//                 component={Link}
//                 href="#"
//                 underline="hover"
//                 sx={{
//                   display: "block",
//                   color: "white",
//                   mb: 1,
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     color: "#90cdf4", // Light blue on hover
//                     pl: 1,
//                   },
//                 }}
//               >
//                 {text}
//               </Typography>
//             ))}
//           </Grid>
//         ))}
//       </Grid>

//       <Box sx={{ mt: 8, textAlign: "center" }}>
//         <Typography variant="body2">
//           &copy; 2025 My Company. All rights reserved.
//         </Typography>
//         <Typography variant="body2">MADE WITH LOVE IN INDIA.</Typography>
//         <Typography variant="body2">
//           Icons made by{" "}
//           <Link
//             href="https://www.freepik.com"
//             target="_blank"
//             rel="noopener"
//             color="inherit"
//             underline="always"
//           >
//             Freepik
//           </Link>{" "}
//           from{" "}
//           <Link
//             href="https://www.flaticon.com"
//             target="_blank"
//             rel="noopener"
//             color="inherit"
//             underline="always"
//           >
//             www.flaticon.com
//           </Link>
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { Grid, Typography, Link, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GavelIcon from "@mui/icons-material/Gavel";

const footerLinks = {
  Company: {
    icon: <BusinessIcon sx={{ mr: 1 }} />,
    items: ["About", "Blog", "Press", "Jobs", "Partners"],
  },
  Solutions: {
    icon: <LightbulbIcon sx={{ mr: 1 }} />,
    items: ["Marketing", "Analytics", "Commerce", "Insights", "Support"],
  },
  Documentation: {
    icon: <MenuBookIcon sx={{ mr: 1 }} />,
    items: ["Guides", "API Status"],
  },
  Legal: {
    icon: <GavelIcon sx={{ mr: 1 }} />,
    items: ["Claim", "Privacy", "Terms"],
  },
};

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #4f46e5, #6d28d9)",
        color: "white",
        mt: 10,
        pt: 6,
        pb: 4,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={4} justifyContent="center" textAlign="left" sx={{ maxWidth: "1000px", margin: "0 auto" }}>
         {Object.entries(footerLinks).map(([section, data]) => (
          <Grid item xs={12} sm={6} md={3} key={section}>
            <Box display="flex" alignItems="center" mb={2}>
              {data.icon}
              <Typography variant="h6" fontWeight="bold">
                {section}
              </Typography>
            </Box>
            {data.items.map((text) => (
              <Typography
                key={text}
                variant="body2"
                component={Link}
                href="#"
                underline="hover"
                sx={{
                  display: "block",
                  color: "white",
                  mb: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#c4b5fd",
                    pl: 1,
                  },
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Footer Bottom Centered Text */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 8,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="white">
            &copy; 2025 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" color="white">
            MADE WITH LOVE IN INDIA.
          </Typography>
          <Typography variant="body2" color="white">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
