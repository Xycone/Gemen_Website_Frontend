import React from 'react';
import { Box, Grid, TextField, Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

// Used for backend API call
import http from '../http';

// Form and form validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Recaptcha v3
import useReCaptchaV3 from '../components/hooks/reCaptchaV3/useReCaptchaV3';

function EmailForm({ setIsDisabled, isDisabled, setContactSupportOpen }) {
    // Google Recaptcha v3
    const executeRecaptcha = useReCaptchaV3('6LdgwKQpAAAAABhTZeCYaXqjOHqjJG8cOLFSjVdC')


    const handleContactSupportFormClose = () => {
        setContactSupportOpen(false);
        reset();
    };

    // yup validation schema
    const validationSchema = yup.object({
        firstName: yup.string().trim()
            .min(1, 'First name must be at least 1 character long')
            .max(50, 'First name must be at most 50 characters long')
            .required('First name is required')
            .matches(/^[a-zA-Z]+$/, "Only allow letters and characters: ' - , ."),
        lastName: yup.string().trim()
            .min(1, 'Last name must be at least 1 character long')
            .max(50, 'Last name must be at most 50 characters long')
            .required('Last name is required')
            .matches(/^[a-zA-Z]+$/, "Only allow letters and characters: ' - , ."),
        email: yup.string().trim()
            .email('Enter a valid email')
            .max(50, 'Email must be at most 50 characters')
            .required('Email is required'),
        message: yup.string().trim()
            .max(320, 'Email must be at most 320 characters'),
    });

    // React Hook Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "all",
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        try {
            setIsDisabled(true);
            const recaptchaToken = await executeRecaptcha('contact_support_form');

            data.firstName = data.firstName.trim();
            data.lastName = data.lastName.trim();
            data.email = data.email.trim();
            data.message = data.message.trim();
            data.token = recaptchaToken;

            const response = await http.post("/mailAPI.php", data);
            if (response.data.success) {
                handleContactSupportFormClose();
                setIsDisabled(false);
                console.log("Email sent successfully");
            } else {
                setIsDisabled(false);
                console.error("Error:", response.data.error);
            }

        } catch (error) {
            setIsDisabled(false);
            console.error("Error calling function ", error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ margin: 5 }}>
            <DialogTitle variant="h5">Contact Support</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Fill in the form to contact support.
                </DialogContentText>

                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth margin="dense" autoComplete="off"
                                        label="First Name"
                                        {...register("firstName")}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName && errors.firstName.message}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth margin="dense" autoComplete="off"
                                        label="Last Name"
                                        {...register("lastName")}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName && errors.lastName.message}
                                    />
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth margin="dense" autoComplete="off"
                                label="Email"
                                {...register("email")}
                                error={!!errors.email}
                                helperText={errors.email && errors.email.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth margin="dense" autoComplete="off"
                                rows={4}
                                multiline
                                label="Message"
                                {...register("message")}
                                error={!!errors.message}
                                helperText={errors.message && errors.message.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
                        </Grid>

                    </Grid>
                </Box>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleContactSupportFormClose}>Cancel</Button>
                <Button type="submit" disabled={isDisabled}>Submit</Button>
            </DialogActions>
        </Box>
    )
}

export default EmailForm
