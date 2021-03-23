import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { FormInput } from "./types";

interface ContactForm {
  name: FormInput<string>;
  email: FormInput<string>;
  phoneNumber: FormInput<string>;
  message: FormInput<string>;
}

export interface ContactProps {
  onSubmit: (form: ContactForm) => Promise<void>;
  form: ContactForm;
  submitButtonLabel: string;
  background: string;
  color: string;
  loading: boolean;
  dark?: boolean;
  title: React.ReactNode;
}

export function Contact({
  onSubmit,
  form,
  submitButtonLabel,
  color,
  dark,
  background,
  title,
  loading,
}: ContactProps) {
  const theme = useTheme();
  const styles = useStyles({ dark });
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      paddingY={16}
      paddingX={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color={color}
      style={{
        background,
        backgroundSize: "cover",
      }}
    >
      <Box maxWidth={960} marginX="auto">
        <Box marginBottom={4}>
          <Typography
            align="center"
            variant={isDesktop ? "h3" : "h4"}
            component="h1"
          >
            {title}
          </Typography>
        </Box>
        <form
          style={{ margin: "auto" }}
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(form);
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label={form.name.label}
                value={form.name.value}
                error={form.name.error}
                helperText={form.name.helperText}
                onFocus={form.name.onFocus}
                onBlur={form.name.onBlur}
                onChange={(event) => form.name.onChange(event.target.value)}
                fullWidth
                variant="outlined"
                disabled={loading}
                className={styles.textField}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                label={form.email.label}
                value={form.email.value}
                error={form.email.error}
                helperText={form.email.helperText}
                onFocus={form.email.onFocus}
                onBlur={form.email.onBlur}
                onChange={(event) => form.email.onChange(event.target.value)}
                fullWidth
                variant="outlined"
                disabled={loading}
                className={styles.textField}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                label={form.phoneNumber.label}
                value={form.phoneNumber.value}
                error={form.phoneNumber.error}
                helperText={form.phoneNumber.helperText}
                onFocus={form.phoneNumber.onFocus}
                onBlur={form.phoneNumber.onBlur}
                onChange={(event) =>
                  form.phoneNumber.onChange(event.target.value)
                }
                fullWidth
                variant="outlined"
                disabled={loading}
                className={styles.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={form.message.label}
                value={form.message.value}
                error={form.message.error}
                helperText={form.message.helperText}
                onFocus={form.message.onFocus}
                onBlur={form.message.onBlur}
                onChange={(event) => form.message.onChange(event.target.value)}
                fullWidth
                multiline
                rows={isDesktop ? 4 : 8}
                variant="outlined"
                disabled={loading}
                className={styles.textField}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth={isDesktop === false}
                disabled={loading}
              >
                {loading ? <CircularProgress /> : submitButtonLabel}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiInputBase-input": {
      color: ({ dark }: { dark?: boolean }) =>
        dark ? theme.palette.common.white : "inherit",
    },
    "& .MuiFormLabel-root": {
      color: ({ dark }: { dark?: boolean }) =>
        dark ? "rgba(255, 255, 255, 0.54)" : "rgba(0, 0, 0, 0.54)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: ({ dark }: { dark?: boolean }) =>
          dark ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: ({ dark }: { dark?: boolean }) =>
          dark ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
      },
    },
  },
}));