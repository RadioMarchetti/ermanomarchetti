import React, {useState, useEffect} from 'react';
import { DialogTitle, DialogContent, Dialog, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { QRCode } from 'react-qrcode-logo';

import emlogo from '../images/emfull.svg' 
import copy from 'copy-to-clipboard';
import { useAlert } from 'react-alert';

function QRCodeDialog() {

  const [dialogOpen, setDialogOpen] = useState(true)

  const alert = useAlert()

  useEffect(() => {
    // alert.info("Clique no código para copiar o conteúdo")
  }, [])

  return (
    <>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Button onClick={() => {
          copy("http://ermanomarchetti.herokuapp.com/")
          alert.success("Conteúdo copiado com sucesso!")
          setDialogOpen(false)
        }}>
          <QRCode qrStyle="dots" value="http://ermanomarchetti.herokuapp.com/" fgColor="#477cce" bgColor="#ffffff" ecLevel="M" />
        </Button>
      </Dialog>
      <Snackbar open={false} anchorOrigin={{ vertical: "center", horizontal: "center" }}>
        <Alert variant="filled" color="info" closeText="Fechar">
          Clique no código para copiar o conteúdo
        </Alert>
      </Snackbar>
    </>
  );
}

export default QRCodeDialog;
