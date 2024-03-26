import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Typography, Box, Container, Grid, Card, CardContent, Button, TextField, Select, MenuItem, FormControl, FormHelperText, InputLabel, Accordion, AccordionSummary,
  AccordionDetails, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Email, LocationOn, Phone } from '@mui/icons-material';

import { useFormik } from 'formik';
import * as yup from 'yup';

function ContactUs() {
  // Scroll to top 
  // Fix for react saving scroll position when navigating to different pages
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  // Contact Support Form
  const [contactSupportOpen, setContactSupportOpen] = useState(false);
  const handleContactSupportFormOpen = () => {
    setContactSupportOpen(true);
  };
  const handleContactSupportFormClose = () => {
    setContactSupportOpen(false);
    formikContactSupport.resetForm();
  };

  // Form to send an email to support
  const formikContactSupport = useFormik({
    initialValues: {
      // branch: "singapore",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      // branch: yup.string().trim()
      //   .required('Branch is required'),
      firstName: yup.string().trim()
        .min(1, 'First name must be at least 1 character long')
        .max(50, 'First name must be at most 50 characters long')
        .required('First name is required')
        .matches(/^[a-zA-Z]+$/,
          "Only allow letters and characters: ' - , ."),
      lastName: yup.string().trim()
        .min(1, 'Last name must be at least 1 character long')
        .max(50, 'Last name must be at most 50 characters long')
        .required('Last name is required')
        .matches(/^[a-zA-Z]+$/,
          "Only allow letters and characters: ' - , ."),
      email: yup.string().trim()
        .email('Enter a valid email')
        .max(50, 'Email must be at most 50 characters')
        .required('Email is required'),
      message: yup.string().trim()
        .max(320, 'Email must be at most 320 characters'),
    }),
    onSubmit: (data) => {
      // data.branch = data.branch.trim();
      data.firstName = data.firstName.trim();
      data.lastName = data.firstName.trim();
      data.email = data.email.trim();
      data.message = data.message.trim();
      http.post("/support", data).then((res) => {
        console.log(res)
        handleContactSupportFormClose();
      });
    }
  });

  return (
    <Box sx={{ my: 2, padding: 4 }}>
      <Box sx={{ pb: 15, pt: 15 }}>
        <Box sx={{ mb: 10, fontWeight: 'bold', textAlign: 'center' }}>
          <Typography variant="h4">
            Let's Talk!
            <br />
            How can we <span style={{ color: '#DD0000' }}>assist you?</span>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ pb: 15 }}>
        <Grid container spacing={4}>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent sx={{ margin: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Product Support</Typography>
                <Typography sx={{ mb: 4 }}>
                  Send an email to reach support by completing the form.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: 'none',
                    },
                    textTransform: 'none',
                  }}
                  onClick={handleContactSupportFormOpen}>
                  <Typography>Get In Touch</Typography>
                </Button>
                <Dialog
                  fullWidth
                  maxWidth="md"
                  open={contactSupportOpen}
                >
                  <Box component="form" onSubmit={formikContactSupport.handleSubmit} sx={{ margin: 5 }}>
                    <DialogTitle variant="h5">Contact Support</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Fill in the form to contact support.
                      </DialogContentText>

                      <Box sx={{ mt: 5 }}>
                        <Grid container spacing={2}>

                          {/* <Grid item xs={12}>
                            <FormControl fullWidth error={formikContactSupport.touched.branch && Boolean(formikContactSupport.errors.branch)}>
                              <InputLabel>Branch</InputLabel>
                              <Select
                                label="Branch"
                                name="branch"
                                value={formikContactSupport.values.branch}
                                onChange={formikContactSupport.handleChange}
                                onBlur={formikContactSupport.handleBlur}
                              >
                                <MenuItem value="singapore">Singapore</MenuItem>
                                <MenuItem value="shanghai">Shanghai</MenuItem>
                              </Select>
                              {formikContactSupport.touched.branch && formikContactSupport.errors.branch && (
                                <FormHelperText>{formikContactSupport.errors.branch}</FormHelperText>
                              )}
                            </FormControl>
                          </Grid> */}

                          <Grid item xs={12}>
                            <Grid container spacing={2}>

                              <Grid item xs={12} md={6}>
                                <TextField
                                  fullWidth margin="dense" autoComplete="off"
                                  label="First Name"
                                  name="firstName"
                                  value={formikContactSupport.values.firstName}
                                  onChange={formikContactSupport.handleChange}
                                  onBlur={formikContactSupport.handleBlur}
                                  error={formikContactSupport.touched.firstName && Boolean(formikContactSupport.errors.firstName)}
                                  helperText={formikContactSupport.touched.firstName && formikContactSupport.errors.firstName}
                                />
                              </Grid>

                              <Grid item xs={12} md={6}>
                                <TextField
                                  fullWidth margin="dense" autoComplete="off"
                                  label="Last Name"
                                  name="lastName"
                                  value={formikContactSupport.values.lastName}
                                  onChange={formikContactSupport.handleChange}
                                  onBlur={formikContactSupport.handleBlur}
                                  error={formikContactSupport.touched.lastName && Boolean(formikContactSupport.errors.lastName)}
                                  helperText={formikContactSupport.touched.lastName && formikContactSupport.errors.lastName}
                                />
                              </Grid>

                            </Grid>
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              fullWidth margin="dense" autoComplete="off"
                              label="Email"
                              name="email"
                              value={formikContactSupport.values.email}
                              onChange={formikContactSupport.handleChange}
                              onBlur={formikContactSupport.handleBlur}
                              error={formikContactSupport.touched.email && Boolean(formikContactSupport.errors.email)}
                              helperText={formikContactSupport.touched.email && formikContactSupport.errors.email}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              fullWidth margin="dense" autoComplete="off"
                              rows={4}
                              multiline
                              label="Message"
                              name="message"
                              value={formikContactSupport.values.message}
                              onChange={formikContactSupport.handleChange}
                              onBlur={formikContactSupport.handleBlur}
                              error={formikContactSupport.touched.message && Boolean(formikContactSupport.errors.message)}
                              helperText={formikContactSupport.touched.message && formikContactSupport.errors.message}
                            />
                          </Grid>

                        </Grid>
                      </Box>

                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleContactSupportFormClose}>Cancel</Button>
                      <Button type="submit">Submit</Button>
                    </DialogActions>
                  </Box>
                </Dialog>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card sx={{ borderRadius: 4, padding: 5, backgroundColor: '#F2F5F8', boxShadow: 'none', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent sx={{ margin: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Contact Us</Typography>
                <Typography sx={{ mb: 4 }}>
                  Reach out to us via phone, email or find us by heading down to our office:
                </Typography>
                <Box sx={{ my: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>Singapore</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                    <LocationOn sx={{ fontSize: '1.2rem', mr: 1 }} />
                    <Typography>
                      <a href="https://www.google.com/maps/place/Gemen+Pte+Ltd/@1.3102084,103.8389323,17z/data=!3m2!4b1!5s0x31da19fc08c4d9fb:0x4f3412b3621c50dc!4m6!3m5!1s0x31da19461c78640f:0xed591bfcac18c41f!8m2!3d1.310203!4d103.8415072!16s%2Fg%2F11fct8jl5g?entry=ttu"
                        target="_blank" rel="noopener noreferrer">
                        10 Winstedt Rd, #03-30A, Singapore 227977
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                    <Email sx={{ fontSize: '1.2rem', mr: 1 }} />
                    <Typography>sales@gemen.tech</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                    <Phone sx={{ fontSize: '1.2rem', mr: 0.5 }} />
                    <Typography>+65 9009 0081</Typography>
                  </Box>
                </Box>

                <Box sx={{ my: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>Shanghai</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                    <LocationOn sx={{ fontSize: '1.2rem', mr: 1 }} />
                    <Typography>
                      <a href="https://www.google.com/maps/place/China,+Shang+Hai+Shi,+Pu+Tuo+Qu,+%E5%87%AF%E6%97%8B%E5%8C%97%E8%B7%AF1188%E5%8F%B7+%E9%82%AE%E6%94%BF%E7%BC%96%E7%A0%81:+200063/@31.2325631,121.4081907,17z/data=!4m10!1m2!2m1!1z5LiK5rW35biC5pmu6ZmA5Yy65Yev5peL5YyX6LevMTE4OOWPt-eOr-eQg-a4r0LluqflhpnlrZfmpbwxNealvCAxNTA4LTY!3m6!1s0x35b26f88c63104eb:0x779e243b30a787ac!8m2!3d31.23255!4d121.41272!15sCkfkuIrmtbfluILmma7pmYDljLrlh6_ml4vljJfot68xMTg45Y-3546v55CD5rivQuW6p-WGmeWtl-alvDE15qW8IDE1MDgtNpIBEGdlb2NvZGVkX2FkZHJlc3PgAQA!16s%2Fg%2F11r8d5tf4x?entry=ttu"
                        target="_blank" rel="noopener noreferrer">
                        1508-6, 15th Floor, Office Building, Block B, Global Harbor, No. 1188 Kaixuan  North Road, Putuo District, Shanghai
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                    <Email sx={{ fontSize: '1.2rem', mr: 1 }} />
                    <Typography>sales@gemen.tech</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', mb: 1 }}>
                    <Phone sx={{ fontSize: '1.2rem', mr: 0.5 }} />
                    <Typography>+86 137 0197 5843</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 5, mt: 10 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Frequently Asked Questions:</Typography>
            <Accordion sx={{
              boxShadow: 'none',
            }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>FAQ 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
              boxShadow: 'none',
            }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>FAQ 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
              boxShadow: 'none',
            }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>FAQ 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
              boxShadow: 'none',
            }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>FAQ 4</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>

        </Grid>
      </Box >
    </Box >
  )
}

export default ContactUs