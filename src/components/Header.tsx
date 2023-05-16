'use client'
import type { FC } from "react"
import styles from "../../styles/Header.module.scss"
// import { Content } from "antd/es/layout/layout"
// import { Layout } from "antd"
// import { Button, ButtonGroup } from '@chakra-ui/react'

// import { Box } from "@mui/material"
import { Box, Grid, Paper, Stack, styled  } from "../../lib/mui"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// Item

// import { Sider }

const Item = styled(Paper)(({theme}) => ({
    
}))



export const Header: FC = (props)=> {

    
    return (
        <header className={styles.head} >
            <Grid className={styles.innerHead} container alignItems={`center
            `}>
                <Grid item 
                    xs={2}
                    sm={6}
                    
                >
                    <Box className={styles.logo}>
                        <Box className={styles.subLogo} />
                    </Box>

                </Grid>
                <Grid item 
                    xs={10}
                    sm={6}>
                        4

                </Grid>


            </Grid>

        </header>
    )

}

