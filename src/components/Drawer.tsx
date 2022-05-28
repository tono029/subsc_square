import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import Divider from '@mui/material/Divider';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AuthContext } from 'src/firebase/AuthProvider';

export default function TemporaryDrawer() {
  const {currentUser}  = React.useContext(AuthContext)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const router = useRouter()

  const handleListClick = (path: string) => {
    router.push(path)
    setDrawerOpen(false)
  }

  const list = (
    <>
      <List>
        
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleListClick("/posts")}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText>投稿一覧</ListItemText>
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleListClick("/create")}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>投稿する</ListItemText>
          </ListItemButton>
        </ListItem>

      </List>
  
      <Divider variant='middle' />
  
      <List>
        {
          currentUser &&

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleListClick("/settings")}>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText>ユーザー設定</ListItemText>
            </ListItemButton>
          </ListItem>
        }
        
      </List>
    </>
  )
    
  return (
    <div className='drawer'>
      <IconButton
        onClick={() => setDrawerOpen(true)}
      >
        <ListIcon fontSize='large' />
      </IconButton>
        

      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250}}
          role="presentation"
        >
          {list}
        </Box>
      </Drawer>
    </div>
  );
}
