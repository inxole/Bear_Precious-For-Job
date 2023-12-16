import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from "@mui/material"
import { useRecoilState } from "recoil"
import { Button_Click } from "./Bear_atom"
import { useState } from "react"

const Zoom_ON_OFF = () => {
    const [count, setCount] = useState(0)
    const [a_u_pushed, setA_U_pushed] = useRecoilState(Button_Click)

    const GradientButton = styled(Button)`
    background: linear-gradient(45deg, #ffa000 30%, #ffc107 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 160, 0, 0.3);`

    const A_U_Click = () => {
        setA_U_pushed((x) => { return x })
        if (count % 2 == 0) {
            setA_U_pushed(true)
        } else { setA_U_pushed(false) }
    }

    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setCount((x) => { return x })
        if (count == 0) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    const handleClose = () => { setOpen(false) }

    return (
        <span>
            <GradientButton
                variant="contained"
                sx={{
                    position: 'fixed',
                    top: 10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    background: "linear-gradient(45deg, #64B5F6 30%, #2196F3 90%)",
                    borderRadius: "3px",
                    border: 3,
                    color: "white",
                    height: "48px",
                    width: '150px',
                    padding: "0 30px",
                    boxShadow: "0 3px 5px 2px rgba(255, 51, 102, 0.3)",
                    transition: "box-shadow 0.3s ease-in-out",
                }}
                onClick={() => { A_U_Click(), setCount(count + 1), handleClickOpen() }}
            >{a_u_pushed ? 'Zoom ON' : 'Zoom OFF'}</GradientButton>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 0,
                        maxHeight: '100%',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '200px',
                        overflow: 'hidden'
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
                    ZoomのON・OFFを切り替えます。
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: '18px' }}>
                        滑らかに描画されないかもしれません。
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', height: "48px" }}>
                    <Button onClick={handleClose} autoFocus>
                        閉じる
                    </Button>
                </DialogActions>
            </Dialog>
        </span >
    )
}

export default Zoom_ON_OFF