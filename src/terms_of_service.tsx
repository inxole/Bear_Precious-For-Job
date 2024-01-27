import Button from '@mui/material/Button'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"

const Double_Button = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <span style={{ display: 'flex', justifyContent: 'center' }} >
            <Button variant="contained" color="primary" style={{ height: '60px', width: '100px' }} onClick={handleClickOpen}>
                利用規約
            </Button>

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
                        height: '500px',
                        overflow: 'hidden'
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontSize: 'medium' }} >
                    利用規約
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >第1条</DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >
                        本ウェブサイトは、inxoleによって制作されました。本サイトのモデルは、「NieR Re[in]carnation」のデザインをモデルにしており、このゲームのオトモを参考にしています。ただし、本ウェブサイト及びスクリプトは、inxoleのオリジナル作品であり、「NieR Re[in]carnation」の公式な関連性はありません。すべての元の著作権は「NieR Re[in]carnation」の権利所有者に帰属します。
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >第2条</DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >
                        本ウェブサイトは非公式であり、公式の「NieR Re[in]carnation」やその開発者、権利所有者とは一切関連がありません。本サイトはinxoleによる個人的な解釈と創造に基づいています。
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >第3条</DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >
                        本ウェブサイトのコンテンツは、教育目的および個人的な使用に限定されています。商業的な目的での使用は、厳しく禁止されています。
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >第4条</DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >
                        1. 本ウェブサイトのコンテンツを無断で改変、再配布、または販売すること。
                        2. 本ウェブサイトを使用して、法律、規範、著作権に違反する行為を行うこと。
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >第5条</DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >
                        本ウェブサイトの使用によって発生したいかなる損害も、inxoleは一切の責任を負いません。利用者は、本ウェブサイトの使用に伴うリスクを自己責任で承知の上で使用するものとします。
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >第6条</DialogContentText>
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center', fontSize: 'small' }} >
                        inxoleは、本利用規約を予告なく変更することができます。
                        利用者が本利用規約に違反した場合、inxoleはいかなる通知なく利用を終了させることができます。
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

export default Double_Button