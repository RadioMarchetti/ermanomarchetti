import { GoogleSpreadsheet } from "google-spreadsheet"

export default async function getArticles() {
  
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: JSON.parse(process.env.GOOGLE_PRIVATE_KEY).privateKey,
  });
  await doc.loadInfo() 

  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows()

  const avisos = rows.map(({ titulo, imagem, autor, avatar, texto }) => {
    return {
      titulo,
      imagem,
      autor,
      avatar,
      texto
    }
  })

  return {
    avisos
  }
}