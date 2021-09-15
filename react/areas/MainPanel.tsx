import React, { FC } from 'react'
import { Grid, Box, Card } from '@vtex/admin-ui'

import TitleArea from './titleArea'
import ConfigArea from './configArea'

const MainPanel: FC = () => {
  return (
    <Card csx = {{ marginX: 350, width: 500 }}>
      <Box csx={{ bg: 'light.primary' }}>
        <Grid templateAreas={['title', 'config']} gap="2">
          <TitleArea />
          <ConfigArea />
        </Grid>
      </Box>
    </Card>
  )
}

export default MainPanel
