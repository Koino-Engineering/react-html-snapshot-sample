import { Button, Card, CardContent, createMuiTheme, Grid, PropTypes, ThemeProvider } from "@material-ui/core";
import React from "react";


const dark = createMuiTheme({ palette: { type: 'dark' } })
const light = createMuiTheme({ palette: { type: 'light' } })
const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large']
const variants: ("text" | "outlined" | "contained")[] = ['text', 'outlined', 'contained'];
const colors: PropTypes.Color[] = ['inherit', 'primary', 'secondary', 'default']
const disableds = [false, true]
export function ButtonSample() {
    const ButtonSampleInner = () => {
        return <Grid container spacing={1}>
            {
                sizes.map(size => {
                    return variants.map(variant => {
                        return colors.map(color => {
                            return disableds.map(disabled => {
                                const key = [size, variant, color, disabled ? "disabled" : "activated"].map(s => s[0]).join("_").toUpperCase()
                                return <Grid key={key} item xs={3}>
                                    <Card>
                                        <CardContent>
                                            <Grid container justify="center" alignItems="center">
                                                <Grid item>
                                                    <Button
                                                        size={size}
                                                        variant={variant}
                                                        color={color}
                                                        disabled={disabled}
                                                    >{key}</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            })
                        })
                    })

                })
                    .flat(Infinity)
            }
        </Grid>
    }
    return <>
        <ThemeProvider theme={light}>
            <ButtonSampleInner />
            <ThemeProvider theme={dark}>
                <ButtonSampleInner />
            </ThemeProvider>
        </ThemeProvider>
    </>
}